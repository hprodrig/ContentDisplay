var tp1Item = new tpItem('- Introduction to Speech Synthesis evaluation', 4, 1, 3);
var tp2Item = new tpItem('- DRT: diagnostic rhyme tests', 5, 4, 4);
var tp3Item = new tpItem('- SUS: Semantically unpredictable sentences', 6, 5, 5);
var tp4Item = new tpItem('- MOS: mean opinion scores', 7, 6, 6);
var tp5Item = new tpItem('- Experimental problems', 8, 7, 7	);
var tp6Item = new tpItem('- Post test', 22, 21, 21);
var tpMenuNav = new tpMenu([tp1Item, tp2Item, tp3Item, tp4Item, tp5Item, tp6Item]);
var currentItem = 0;
//variable used to decide if TP should be opened (if is from exercise button key press always opens, if is from arrow slide change should open only once)
var pressedExercisesButton = false;

function tpItem(desc, slideID, bottomRange, topRange){
	this.desc=desc;
	this.slideID=slideID;
	this.tpDone = false;
	this.bottomRange = bottomRange;
	this.topRange = topRange;
	
	this.doTP = doTP;
	this.unlockItem = unlockItem;
	
	function doTP(){
		if(this.tpDone){
			return false;
		}
		this.tpDone = true;
		return true;
	}
	
	function unlockItem(){
		$("[id=\'" + this.desc + "\']").css('pointer-events', 'auto');
		$("[id=\'" + this.desc + "\']").css('color', '#222');
	}
}

function tpMenu(tpItemArray){
	this.tpItemArray=tpItemArray;
	this.maxIndex = 0;
	this.hasFAQs = false;
	
	this.buildTPMenu = buildTPMenu;
	this.currentQuestion = '';
	this.changeItem = changeItem;
	this.slideChange = slideChange;
	
	function buildTPMenu(tpMenuElem){
		var tpMenuDiv = '';
		var j = 0;
		var divWidth = getRemainingMarginWidth() + 'px';
		for (var i = 0; i < this.tpItemArray.length; i++){
			var slideID = this.tpItemArray[i].slideID;
			tpMenuDiv = tpMenuDiv + '<div id="tpItem" style="width:'+ divWidth+ '; vertical-align: middle; padding-bottom:10px;"><p style="width:35px; height:35px; display: inline;"><img border="0" src="img/arrow.png" height=35 width=35 style="float:left; display: none;"></p>'+'<a style="color:#A4A4A4; z-index=1; position:relative;" onclick="reviewSlide(' + (this.tpItemArray[i].bottomRange+1) + ');" id="'+ this.tpItemArray[i].desc + '" class="tpItem" style="display: inline;">' + this.tpItemArray[i].desc + '</a>';
			
			tpMenuDiv = tpMenuDiv + '<button id="doEx" class="ui-button-text" type="button" onclick="doExercises(' + slideID + ')" style="display:none;">Exercises</button></div>';
		}
		
		document.getElementById(tpMenuElem).innerHTML = tpMenuDiv;
		
		//forcing check box to lose focus. If this is not done arrow keys stop working for changing slides
		/*$('input[type=checkbox]').mousedown(function (event) {
			event.preventDefault();
		});*/
	}
	
	function slideChange(slideID){
		for (var i = 0; i < this.tpItemArray.length; i++){
			if(slideID >= this.tpItemArray[i].bottomRange && slideID <= this.tpItemArray[i].topRange){
				this.changeItem(i);
				//Major hack: syncronizing TPs with the current slide
				tpIndex = i;
				currentTP = nextTP();
				this.tpItemArray[i].unlockItem();
				return;
			}
		}
	}
	
	function changeItem(itemIndex){
		$("[id=tpItem]").each(function() {
		  if($(this).index() == itemIndex){
			$(this).find('img').css('display', 'inline-block');
			$(this).find('.tpItem').css('padding-left', '5px');
			$(this).find('#doEx').css('display', 'inline-block');
		  }
		  else{
			$(this).find('img').css('display', 'none');
			$(this).find('.tpItem').css('padding-left', '45px');
			$(this).find('#doEx').css('display', 'none');
		  }
		});
	}
}			