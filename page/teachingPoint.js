//creation of specific TPs
var tp1Q1 = new tpQuestion("Why do we need evaluation numbers?<br>(This question, and also all the following, might require more than one answer to be fully correct)", [1, 1, 0], ['Choose the best voice.', 'For comparison and development.', 'Please our boss.'], ['<a onclick="registerUse(0);reviewSlide(2);">Slide 2</a>', '<a onclick="registerUse(1);" href="papers_ref/SS_eval.pdf" target="_blank">Paper on Speech Synthesis evaluation.</a>'], ['Slide 2 also contains information that can help you.', 'Reading the paper will also help you getting the answer correct.']);
var tp1Q2 = new tpQuestion("Name some different types of users who may have different biases when listening to synthetic speech, and why.",[1, 1], ['Developer: hears too well, listens to things other can\'t hear.', 'End user: sensitive to listening conditions, sensitive to content.'], ['<a onclick="registerUse(0);reviewSlide(4);">Slide 4</a>'], ['Listen carefully to the audio of Slide 4.']);
var tp1 = new teachingPoint("In this introduction you have studied the importance and some of the difficulties in Speech Synthesis evaluation. Now we have some exercises to check if you understood the lesson so far.", "Let's continue, now we will discribe an actual Speech Synthsis evaluation method called DRT.", [tp1Q1, tp1Q2], 0, 4);

var tp2Q1 = new tpQuestion("What is the purpose of DRT?<br>(This question, and also all the following, might require more than one answer to be fully correct)",[-1, 1, -1, -1], ['To check quality of text to speech.', 'To check specific phonetic quality of text top speech.', 'To check that specific words are understood.', 'Its a standard test.'], ['<a onclick="registerUse(0);reviewSlide(5);">Slide 5</a>'], ['Listen carefully to the audio of Slide 5.']);
var tp2Q2 = new tpQuestion("Why is DRT less relevant today?",[1, 1, 1], ['Quality of synthesis is now much better.', 'Voice can be tuned to pass it.', 'Techniques (concatenation) less sensitive to such errors.'], ['<a onclick="registerUse(0);reviewSlide(5);">Slide 5</a>'], ['Again, if you listen carefully to the audio of Slide 5 you will get the answer.']);
var tp2 = new teachingPoint("Now that you have studied DRT tests, there will be some exercises to check your progress.", "The next part of lesson is about an evaluation method called SUS.", [tp2Q1, tp2Q2], 0, 5);

var tp3Q1 = new tpQuestion("How do we construct SUS?<br>(This question, and also all the following, might require more than one answer to be fully correct)",[-1, -1, 0, 1], ['Find strange sentences in newspaper text.', 'Hand construct sentences experimenters find hard.', 'Use a part of speech template and add hard words.', 'Use a part of speech template and automatically assign low frenquency words.'], ['<a onclick="registerUse(0);reviewSlide(10);">Slides 10-11</a>', '<a onclick="registerUse(1);" href="papers_ref/SUS.pdf" target="_blank">Paper on SUS.</a>'], ['Slides 10 and 11 have some SUS examples that might help you.', 'Reading the paper will also help you getting the answer correct.']);
var tp3Q2 = new tpQuestion("Why is it better than standard sentences?",[0, 1, -1, -1], ['Standard sentences are too easy.', 'Increases the error rate so easier to distinguish systems.', 'It makes it more fun.', 'You can generate them more easily.'], ['<a onclick="registerUse(0);" href="papers_ref/SS_eval2.pdf" target="_blank">Paper on large scale Speech Synthesis evaluation.</a>'], ['Reading the paper will help you getting the answer correct.']);
var tp3Q3 = new tpQuestion("What are its limitations?",[0, 1, 1, 0], ['They might be too hard.', 'Non-natives find these particularly hard.', 'These are not natural, so results might not correlate with understandability of natural sentence.', 'You need to generate them properly.'], ['<a onclick="registerUse(0);reviewSlide(6);">Slide 6</a>'], ['Listen carefully to the audio of Slide 6.']);
var tp3 = new teachingPoint("This topic was about an evaluation method based on SUS. It's time to do some exercises.", "The last standard test that we are going to talk about is called MOS.",[tp3Q1, tp3Q2, tp3Q3], 0, 6);

var tp4Q1 = new tpQuestion("What are some issues in the question you ask in MOS tests?<br>(This question, and also all the following, might require more than one answer to be fully correct)",[1, 1, 0], ['You can influence the listener with your question.', 'The listener might not understand the specific question meaning.', 'They wont read the question.'], ['<a onclick="registerUse(0);reviewSlide(7);">Slide 7</a>'], ['Listen carefully to the audio of Slide 7.']);
var tp4 = new teachingPoint("Let's see if you understood what MOS are.", "We finished describing standard tests, we will now focus on another type of exeprimental problems.",[tp4Q1], -1, 7);

var tp5Q1 = new tpQuestion("Name some issues you should consider in listening test (and ways to attentuate them).",[1, 1, 1, 1, 1], ['Order of presentation.', 'Hardware quality (headphones, speakers).', 'Volume.', 'Focussed or distracted.', 'Personal preference.'], ['<a onclick="registerUse(0);reviewSlide(8);">Slide 8</a>'], ['Listen carefully to the audio of Slide 8.']);
var tp5 = new teachingPoint("Apart from the actual tests that evaluate Speech Synthesis, there are other issues to take into account. Let's see if you understood them.", "Let's continue with the lesson.",[tp5Q1], 0, 8);

var tp6Q1 = new tpQuestion("Name a technique to evaluate understandability on TTS voices.<br>(This question, and also all the following, might require more than one answer to be fully correct)",[1, -1, -1, -1], ['Semantically unpredictable sentences.', 'Mean Opinion Scores.', 'Diagnostic Rhyme Tests.', 'Testing within an application.'], [], []);
var tp6Q2 = new tpQuestion("Why do we want to increase the expect error rate with hard SUS sentences.",[1, -1, -1, -1], ['To get better differiential comparisons.', 'To make it more scientific.', 'To make the listener concentrate more.', 'To annoy the listener so they try harder.'], [], []);
var tp6Q3 = new tpQuestion("Why do we get multiple people to listen to same examples.",[1, 1, 1, 1], ['To avoid personal preferences.', 'To get more reliable statistics.', 'To cancel out disinterested listeners answers.', 'To increase reliability of results.'], [], []);
var tp6Q4 = new tpQuestion("Why do we use web listing tests over in-house listening tests.",[1, -1], ['Easier to get more listeners.', 'Hard to find good listening test accommodation.'], [], []);
var tp6Q5 = new tpQuestion("Name listening tests that are good for evaluating speech synthesis.",[1, -1, 1, -1], ['SUS.', 'Modified DRT.', 'MOS.', 'DRT.'], [], []);
var tp6 = new teachingPoint("They that you have studied the whole lecture, it is time for a general post test.", "Well done you finished this lecture!",[tp6Q1, tp6Q2, tp6Q3, tp6Q4, tp6Q5], -1, 22);

//vars manipulated by deck.narrator.js
var tpIndex = 0;
var allTPs = [tp1, tp2, tp3, tp4, tp5, tp6];
var currentTP = nextTP();
var currentQuestion;

function tpQuestion(wording, answerTypes, hypothesis, studyMaterialsHTML, innerLoopFBArray){
	this.wording=wording;
	//Type 1: correct
	//Type 0: partially correct
	//Type -1: completly wrong	
	this.answerTypes=answerTypes;
	this.hypothesis=hypothesis;
	this.studyMaterialsHTML = studyMaterialsHTML;
	this.innerLoopFBArray = innerLoopFBArray;
	this.usedStudyMAterial = [];
	this.getInnerLoopFeedback = getInnerLoopFeedback;
	this.registerStudyPointer = registerStudyPointer;
	
	for (var i = 0; i < innerLoopFBArray.length; i++) this.usedStudyMAterial[i] = 0;

	this.isCorrect=isCorrect;
	function isCorrect(answers){
		//correctionCode = 2 has all correct
		//correctionCode = 1 missing correct answers (no incorrect, but might have partially ones)
		//correctionCode = 0 only anwsered partially correct
		//correctionCode = -1 has wrong answer
		//correctionCode = -2 bottom up the answer	
		
		for (var i=0;i<answerTypes.length;i++){
			//	alert(answers[i] + ' ' + answer);
			if(answerTypes[i] == -1){
				for (var j=0;j<answers.length;j++){
					if(hypothesis[i] == answers[j]){
						return -1;
					}
				}
			}
		}
		
		var partiallyCorrectCount = 0;
		for (var i=0;i<answerTypes.length;i++){
			//	alert(answers[i] + ' ' + answer);
			if(answerTypes[i] == 0){
				for (var j=0;j<answers.length;j++){
					if(hypothesis[i] == answers[j]){
						partiallyCorrectCount++;
					}
				}
			}
		}
		
		var correctCount = 0;
		var totalPosssibleCorrect = 0;
		for (var i=0;i<answerTypes.length;i++){
			//	alert(answers[i] + ' ' + answer);
			if(answerTypes[i] == 1){
				totalPosssibleCorrect++;
				for (var j=0;j<answers.length;j++){
					if(hypothesis[i] == answers[j]){
						correctCount++;
					}
				}
			}
		}
		
		if(correctCount == totalPosssibleCorrect){
			return 2;
		}
		
		if(correctCount > 0){
			return 1;
		}
		
		if(partiallyCorrectCount > 0){
			return 0;
		}

		return 2;
	}
	
	function getInnerLoopFeedback(){
		if(this.usedStudyMAterial.length == 0){
			return "";
		}
	
		var fbStr = "";
		var firstFBView = true;
		for(var i = 0; i < this.usedStudyMAterial.length; i++){
			if(this.usedStudyMAterial[i] == 1){
				firstFBView = false;
			}
			//condition forces the first unseen fb to be shown
			else if(fbStr.length == 0){
				//student did not click this study material pointer
				fbStr = this.innerLoopFBArray[i];
			}
		}
		
		//it is the first time the sutdent is looking at the study pointers
		if(firstFBView){
			return 'Here are some study materials that can help get the answer right:';
		}
		
		if(!(fbStr.length == 0)){
			return fbStr;
		}
		
		//student review all study pointers
		return 'If you review again the study materials carefully I am sure you will find the answer.'
	}
	
	function registerStudyPointer(studyPointerIndex){
		this.usedStudyMAterial[studyPointerIndex] = 1;
	}
}

function teachingPoint(tpDesc, tpConclusion, tpQuestions, maxFeedBack, slideNumber){
	this.tpDesc = tpDesc;
	this.tpConclusion = tpConclusion;
	this.maxFeedBack=maxFeedBack;
	this.tpQuestions=tpQuestions;
	this.slideNumber=slideNumber;
	this.questionIndex = 0;
	this.feedBackCounter = 0;
	this.hasDoneTP = false;

	this.currentQuestion=currentQuestion;
	this.nextQuestion=nextQuestion;
	this.hasNextQuestion=hasNextQuestion;
	this.isCorrect=isCorrect;
	this.buildForm = buildForm;
	this.addStudySuggestions = addStudySuggestions;
	this.doneTP = doneTP;
	this.bottomOut = bottomOut;
	
	function currentQuestion(){
		$('.ui-dialog-title').text("Exercise " + (this.questionIndex +1) + "/" + this.tpQuestions.length);
		return this.tpQuestions[this.questionIndex];
	}
	
	function nextQuestion(){
		this.feedBackCounter = 0;
		this.questionIndex = this.questionIndex + 1;
		nextQuestion = this.tpQuestions[this.questionIndex];
		$('.ui-dialog-title').text("Exercise " + (this.questionIndex +1) + "/" + this.tpQuestions.length);
		return nextQuestion.wording;
	}
	
	function hasNextQuestion(){
		if((this.questionIndex+1) < this.tpQuestions.length){
			return true;
		}
		
		this.questionIndex = 0;
		return false;
	}
	
	function addStudySuggestions(feedBackElem){
		for (var i = this.tpQuestions[this.questionIndex].studyMaterialsHTML.length - 1; i > -1; i--){
			$('<ul class="studyPointer"><li>' + this.tpQuestions[this.questionIndex].studyMaterialsHTML[i] + '</ul></li>').insertAfter(feedBackElem);
		}
	}
	
	function isCorrect(answers){
		//correctionCode = 2 correct
		//correctionCode = 1 missing correct answers
		//correctionCode = 0 not quite right
		//correctionCode = -1 completly wrong	
		//correctionCode = -2 bottom up the answer	
		correctionCode = this.tpQuestions[this.questionIndex].isCorrect(answers);
		if(!(correctionCode == 2)){
			this.feedBackCounter = this.feedBackCounter + 1;
		}
		if(this.feedBackCounter == 3){
			return -2;
		}
		return correctionCode;
	}
	
	function buildForm(formID){
		var radioButtonsHTML = '';
		tpQuestion = this.tpQuestions[this.questionIndex];
		radioButtonsHTML = radioButtonsHTML + '<input type="checkbox" name="selAnswer" value="'+ tpQuestion.hypothesis[0] + '" style="margin-bottom: 10px;"><label class="hyp" style="padding-right: 80px;">'+tpQuestion.hypothesis[0]+'</label>';
		for (var i=1;i<tpQuestion.hypothesis.length;i++){
			radioButtonsHTML = radioButtonsHTML + '<input type="checkbox" name="selAnswer" value="'+ tpQuestion.hypothesis[i] + '" style="margin-bottom: 10px;"><label class="hyp" style="padding-right: 80px;">'+tpQuestion.hypothesis[i]+'</label>';
		}
		radioButtonsHTML = radioButtonsHTML	;
		document.getElementById(formID).innerHTML = radioButtonsHTML;
		
		$('#dialog').css('height', 'auto');
		$("#dialog").dialog({
				position: {'my': 'center', 'at': 'center'}				
		});
	}
	
	function doneTP(){
		if(this.feedBackCounter > this.maxFeedBack){
			return false;
		}
		return true;
	}
	
	function bottomOut(){
		var cq = this.currentQuestion();
		var i = 0;
		$("[type=checkbox]").each(function() {
		  	if(cq.answerTypes[i] == 1){
				$(this).prop('checked', true);
			}
			else{
				$(this).prop('checked', false);
			}
			i++;
		});
		i = 0;
		$("[class=hyp]").each(function() {
		  	if(cq.answerTypes[i] == 1){
				$(this).css('color', '#009900;');
			}
			i++;
		});
	}
}

function nextTP(){
	if(tpIndex == allTPs.length){
		//case where we have no more TPs left. 
		//Using slide number = -1 will make sure that checkIfIsTP (deck.narrator) never fires a TPs
		return new teachingPoint([], 0, -1);
	}
	tp = allTPs[tpIndex];
	tpIndex = tpIndex + 1;
	return tp;
}

function reviewSlide(slideNumber){
	//alert('review ' + slideNumber);
	//hideFeedBack();
	lockTP = false;
	$("#dialog").dialog("close");
	$.deck('go', slideNumber-1);
	document.getElementById('narrator-audio').muted = false;
}

//Used to keep track of what study pointers the student's have clicked
//Function to be called from onClick in studyMaterialHTML argument of tpQuestion
function registerUse(studyPointerIndex){
	currentTP.currentQuestion().registerStudyPointer(studyPointerIndex);
	//hideFeedBack();
	//$('input:checkbox').removeAttr('checked');
	$("#dialog").dialog("close");
	$("#dialog").dialog("open");
}