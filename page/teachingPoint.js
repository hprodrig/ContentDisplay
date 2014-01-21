//creation of specific TPs
var q1 = "Question 1?";
var a11 = "a1";

var q2 = "Question 2?";
var a21 = "a2";


var tpQ1AnswersArray = [a11];
var tpQ2AnswersArray = [a21];

var tp1Q1 = new tpQuestion(q1,tpQ1AnswersArray);
var tp1Q2 = new tpQuestion(q2,tpQ2AnswersArray);
var tp1 = new teachingPoint([tp1Q1, tp1Q2], 0, 1);

var q3 = "Question 3?";
var a31 = "a3";

var q4 = "Question 4?";
var a41 = "a4";


var tpQ3AnswersArray = [a31];
var tpQ4AnswersArray = [a41];

var tp2Q3 = new tpQuestion(q3,tpQ3AnswersArray);
var tp2Q4 = new tpQuestion(q4,tpQ4AnswersArray);
var tp2 = new teachingPoint([tp2Q3, tp2Q4], 0, 3);

//vars manipulated by deck.narrator.js
var tpIndex = 0;
var allTPs = [tp1, tp2];
var currentTP = nextTP();
var currentQuestion;

function tpQuestion(wording,answers){
	this.wording=wording;
	this.answers=answers;

	this.isCorrect=isCorrect;
	function isCorrect(answer){
		for (var i=0;i<answers.length;i++){
			//	alert(answers[i] + ' ' + answer);
			if(answers[i] === answer){
				return true;
			}
		}
		return false;
	}
}

function teachingPoint(tpQuestions, maxFeedBack, slideNumber){
	this.maxFeedBack=maxFeedBack;
	this.tpQuestions=tpQuestions;
	this.slideNumber=slideNumber;
	this.questionIndex = -1;
	this.feedBackCounter = 0;

	this.nextQuestion=nextQuestion;
	this.hasNextQuestion=hasNextQuestion;
	this.isCorrect=isCorrect;
	
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
	
	function isCorrect(answer){
		correct = this.tpQuestions[this.questionIndex].isCorrect(answer);
		if(!correct){
			this.feedBackCounter = this.feedBackCounter + 1;
		}
		return correct;
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