//creation of specific TPs
var tp1Q1 = new tpQuestion("Why do we need evaluation numbers?",[1, 1, 0], ['Choose the best voice.', 'For comparison and development.', 'Please our boss.'], ['<a onclick="registerUse(0);reviewSlide(0);">Slide 2</a>', '<a onclick="registerUse(1);" href="http://www.festvox.org/blizzard/bc2005/IS051946.PDF" target="_blank">Paper on Speech Synthesis evaluation.</a>'], ['Slide 2 also contains information that can help you.', 'Reading the paper will also help you getting the answer correct.']);
/*var tp1Q2 = new tpQuestion("Name some different types of users who may have different biases when listening to synthetic speech, and why.",[1, 1], ['Developer: hears too well, listens to things other can\'t hear', 'For comparison and development.', 'End user: sensitive to listening conditions, sensitive to content.']);
var tp1Q3 = new tpQuestion("What is the purpose of DRT?",[-1, -1, 1, 1], ['To check quality of text to speech.', 'To check specific phonetic quality of text top speech.', 'To check that specific words are understood.', 'Its a standard test.']);
var tp1Q4 = new tpQuestion("Why is DRT less relevant today?",[1, 1, 1], ['Quality of synthesis is now much better.', 'Voice can be tuned to pass it.', 'Techniques (concatenation) less sensitive to such errors.']);
var tp1Q5 = new tpQuestion("How do we construct SUS?",[-1, -1, 0, 1], ['Find strange sentences in newspaper text.', 'Hand construct sentences experimenters find hard.', 'Use a part of speech template and add hard words.', 'Use a part of speech template and automatically assign low frenquency words.']);
var tp1Q6 = new tpQuestion("Why is it better than standard sentences?",[0, 1, -1, -1], ['Standard sentences are too easy.', 'Increases the error rate so easier to distinguish systems.', 'It makes it more fun.', 'You can generate them more easily.']);
var tp1Q7 = new tpQuestion("What are its limitations?",[0, 1, 1, 0], ['They might be too hard.', 'Non-natives find these particularly hard.', 'These are not natural, so results might not correlate with understandability of natural sentence.', 'You need to generate them properly.']);
var tp1Q8 = new tpQuestion("What are some issues in the question you ask in MOS tests?",[1, 1, 0], ['You can influence the listener with your question.', 'The listener might not understand the specific question meaning.', 'They wont read the question.']);
var tp1Q9 = new tpQuestion("Name some issues you should consider in listening test (and ways to attentuate them).",[1, 1, 1, 1, 1], ['Order of presentation.', 'Hardware quality (headphones, speakers).', 'Volume.', 'Focussed or distracted.', 'Personal preference.']);*/



var tp1 = new teachingPoint([tp1Q1], -1, 1);


//vars manipulated by deck.narrator.js
var tpIndex = 0;
var allTPs = [tp1];
var currentTP = nextTP();
var currentQuestion;

function tpQuestion(wording,answerTypes, hypothesis, studyMaterialsHTML, innerLoopFBArray){
	this.wording=wording;
	//Type 1: correct
	//Type 0: not quite correct
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
		
		for (var i=0;i<answerTypes.length;i++){
			//	alert(answers[i] + ' ' + answer);
			if(answerTypes[i] == 0){
				for (var j=0;j<answers.length;j++){
					if(hypothesis[i] == answers[j]){
						return 0;
					}
				}
			}
		}
		
		var flag = false;
		for (var i=0;i<answerTypes.length;i++){
			flag = false;
			if(answerTypes[i] == 1){
				for (var j=0;j<answers.length;j++){
					if(hypothesis[i] == answers[j]){
						flag = true;
						break;
					}
				}
				if(!flag){
					return 1;
				}
			}
		}
		return 2;
	}
	
	function getInnerLoopFeedback(){
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

function teachingPoint(tpQuestions, maxFeedBack, slideNumber){
	this.maxFeedBack=maxFeedBack;
	this.tpQuestions=tpQuestions;
	this.slideNumber=slideNumber;
	this.questionIndex = 0;
	this.feedBackCounter = 0;

	this.currentQuestion=currentQuestion;
	this.nextQuestion=nextQuestion;
	this.hasNextQuestion=hasNextQuestion;
	this.isCorrect=isCorrect;
	this.buildForm = buildForm;
	this.addStudySuggestions = addStudySuggestions;
	
	function currentQuestion(){
		return this.tpQuestions[this.questionIndex];
	}
	
	function nextQuestion(){
		this.questionIndex = this.questionIndex + 1;
		nextQuestion = this.tpQuestions[this.questionIndex];
		return nextQuestion.wording;
	}
	
	function hasNextQuestion(){
		if(this.feedBackCounter > this.maxFeedBack && (this.questionIndex+1) < this.tpQuestions.length){
			return true;
		}
		
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
		correctionCode = this.tpQuestions[this.questionIndex].isCorrect(answers);
		if(!(correctionCode == 2)){
			this.feedBackCounter = this.feedBackCounter + 1;
		}
		return correctionCode;
	}
	
	function buildForm(formID){
		var radioButtonsHTML = '';
		tpQuestion = this.tpQuestions[this.questionIndex];
		radioButtonsHTML = radioButtonsHTML + '<input type="checkbox" name="selAnswer" value="'+ tpQuestion.hypothesis[0] + '"><label class="hyp">'+tpQuestion.hypothesis[0]+'</label><br>';
		for (var i=1;i<tpQuestion.hypothesis.length;i++){
			radioButtonsHTML = radioButtonsHTML + '<input type="checkbox" name="selAnswer" value="'+ tpQuestion.hypothesis[i] + '"><label class="hyp">'+tpQuestion.hypothesis[i]+'</label><br>';
		}
		radioButtonsHTML = radioButtonsHTML	;
		document.getElementById(formID).innerHTML = radioButtonsHTML;
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
	hideFeedBack();
	lockTP = false;
	$("#dialog").dialog("close");
	$.deck('go', slideNumber);
	document.getElementById('narrator-audio').muted = false;
}

//Used to keep track of what study pointers the student's have clicked
//Function to be called from onClick in studyMaterialHTML argument of tpQuestion
function registerUse(studyPointerIndex){
	currentTP.currentQuestion().registerStudyPointer(studyPointerIndex);
	hideFeedBack();
	$('input:checkbox').removeAttr('checked');
	$("#dialog").dialog("close");
	$("#dialog").dialog("open");
}