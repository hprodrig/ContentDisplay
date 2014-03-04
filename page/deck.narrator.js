/*!
Deck JS - deck.narrator
Copyright (c) 2013 Kevin Lamping
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt

// TODO hook up with https://github.com/cgiffard/Captionator/
// TODO organize code a little bit better
// TODO add in unit/functional tests

*/
 var audio,
      segments = [],
	  programSeek = true;
      segmentEnd = 0;
	  
var lockTP = false;
var wasSlidePause = false;
//flag used to see if we should display the pre TP dialog (we only want to show it the first time we enter the TP)
var firstTPopen = true;

function getCurrentSlideID(){
	var slideID = document.getElementsByClassName("slide deck-current")[0].id;
	return parseInt(slideID.slice(6));
}
/*
This module adds a audio narration to slides
*/
(function($, deck, undefined) {
        var $d = $(document);

  /*
  Extends defaults/options.

  options.selectors.narratorAudio
    The element that matches this selector is the audio tag for the soundtrack
  */
  $.extend(true, $[deck].defaults, {
    selectors: {
      narratorAudio: '#narrator-audio'
    }
  });

  function checkTime () {
      if (audio.currentTime >= segmentEnd) {
        audio.pause();
      }
  }

  function changeSlides(e, from, to) {
    /*if(tp1.slideNumber == from){
		currentTP = tp1;
		//$.deck('go', currentTP.slideNumber);
		//stopSlides(e);
		audio.pause();
		
		//currentQuestion = currentTP.nextQuestion();
		document.getElementById("wording").innerHTML = currentTP.nextQuestion();
		 $("#dialog").dialog({
				modal: true,
				draggable: false,
				width: 500
			});
		$(".ui-dialog-titlebar-close", this.parentNode).hide();
		$("#dialog").dialog("open");
	}*/
    if (audio) {
	  //alert('begin ' + segments[to][0]);
	  document.getElementById("time").innerHTML = 'from ' + toMinutes(segments[to][0]) + ' to ' + toMinutes(segments[to][1]) + '<br> Duration ' + (segments[to][1] - segments[to][0]);
      audio.currentTime = segments[to][0];

      segmentEnd = segments[to][1];
	  programSeek = true;
      audio.play();
    }
  }

  function toMinutes(secs){
	min = Math.floor(secs / 60);
	return min.toString() +':'+ (secs - min*60).toString();
  }
  function startSlides (ev) {
    $.deck('play');
  }

  function stopSlides (ev) {
    slideID = getCurrentSlideID();
	var remainTime = segments[slideID][1] - audio.currentTime;
	$('.slide.deck-current').attr('data-duration', remainTime*1000);
	wasSlidePause = true;
    $.deck('pause');
  }
  
  function seekSlides (ev) {
	  if(!programSeek){
	    slideToShow = getSlide(audio.currentTime);
	    //alert(audio.currentTime);
		changeSlides (5,slideToShow,slideToShow);
		programSeek = true;
		$.deck('go', slideToShow);
	  }
	  else{
		programSeek = false;
	  }
  }
  
  function checkIfIsTP (ev, from, to) {
  
	intSlideID = getCurrentSlideID();
	
	if(lockTP){
		ev.preventDefault();
	}

	if(!lockTP && currentTP.slideNumber == to){
		lockTP = true;
		ev.preventDefault();
		if(firstTPopen){
			currentTP.buildForm('answerCheckbox');
			//Major hack!!!!! Pausing causes unwanted slide change after play
			document.getElementById('narrator-audio').muted = true;
			firstTPopen = false;
			$("#dialogBeginTP").dialog({
					modal: true,
					draggable: false,
					width: 500
			});
			$(".ui-dialog-titlebar-close", this.parentNode).hide();
			$("#dialogBeginTP").dialog("open");
			document.getElementById("tpDesc").innerHTML = currentTP.tpDesc;
		}
		else{
			openTP();
		}
	}
  }
  
  function getSlide(currentTime){
	totalDuration = 0
	for (var i = 0; i < segments.length; i++){ 
		totalDuration += segments[i][1] - segments[i][0];
		if(currentTime < totalDuration){
			return i;
		}
	}
	return -1;
  }

  $d.bind('deck.init', function() {
    var opts = $.deck('getOptions');

    // get the audio element we added to our page
    audio = $(opts.selectors.narratorAudio).get(0);

    // uncomment following line if not using deck.automatic.js
    //audio.addEventListener('timeupdate', checkTime, false);

    // Sync audio with slides
    audio.addEventListener('play', startSlides, false);
    audio.addEventListener('pause', stopSlides, false);
	audio.addEventListener('seeked', seekSlides, false);

    // use deck.js built-in functionality to get all slides and current slide
    var slides = $.deck('getSlides');
    var $currentSlide = $.deck('getSlide');

    // set initial values for time position and index
    var position = 0;
    var currentIndex = 0;

    $.each(slides, function(i, $el) {
      // get the duration specified from the HTML element 
      var duration = $el.data('narrator-duration');

      // this determines which slide the viewer loaded the page on
      if ($currentSlide == $el) {
        currentIndex = i;
      }

      // push the start time (previous position) and end time (position + duration) to an array of slides
      segments.push([position, position + duration]);

      // increment the position to the start of the next slide
      position += duration;
    });

    try {
      // try setting the initial time
      // this will throw an exception if the audio isn't ready
      audio.currentTime = segments[currentIndex][0];
    } catch (e) {
      // if we catch, then the audio isn't ready yet
      // wait for audio to be ready, then try again
      audio.addEventListener('canplay', function (ev) {
        audio.currentTime = segments[currentIndex][0];

        // remove event listener so this function doesn't get executed again
        this.removeEventListener('canplay', arguments.callee, false);
      });
    }

    // set the first end point for our audio (if we're not using deck.automatic.js)
    segmentEnd = segments[currentIndex][1];
  })
  /* Update audio location, play till end of slide */
  .bind('deck.change', changeSlides)
  .bind('deck.beforeChange', checkIfIsTP);

})(jQuery, 'deck');