// Selected Elements
const restartButton = document.getElementById('btn-begin');
const riddleQues = document.getElementById('riddles');
const riddleQuestions = document.getElementById('riddle-question')
const riddleAnswerA = document.getElementById('answer-btn1')
const riddleAnswerB = document.getElementById('answer-btn2')
const riddleAnswerC = document.getElementById('answer-btn3')
const riddleAnswerD = document.getElementById('answer-btn4')
let shuffleRiddles;
let currentRiddle = 0;

restartButton.addEventListener('click', beginRiddles);

function beginRiddles() {
    restartButton.hidden = true;
    riddleQues.hidden = false;
    shuffleRiddleQuestions();
}
function shuffleRiddleQuestions() {
    for (let quiz = 0; quiz < riddles.length; i++ ){
    shuffleRiddles = riddles.sort(() => Math.random() - 0.5);
    showRiddles(quiz)
    }
}

function showRiddles(riddle) {
    let r = riddles[currentRiddle];
    riddleQuestions.innerText = r.riddle;
    riddleAnswerA.innerText = r.answer1; 
    riddleAnswerB.innerText = r.answer2;  
    riddleAnswerC.innerText = r.answer3;  
    riddleAnswerD.innerText = r.answer4;  
    nextQuestion()
}

function nextQuestion() {
    if(currentRiddle < lastQuestion){
        currentRiddle++
        showRiddles()
    }

}

function correctScore() { 

}

const riddles = [{
    riddle: "What starts with an e and ends with an e but only has one letter in it?", 
    answer1: "an elephant",
    answer2: "an envelope",
    answer3: "an ewe", 
    answer4: "an eye",
    correct: "2"
},
 {
    riddle: "What has to be broken before you can use it?", 
    answer1: "a package",  
    answer2: "an envelope",  
    answer3: "a box",  
    answer4: "an egg", 
    correct: "4",
},
{
    riddle: "What question can you never answer yes to?", 
    answer1: "Are you asleep yet?", 
    answer2: "Do you want a chocolate?", 
    answer3: "Are you happy?", 
    answer4: "Do you know the answer?",
    correct: "1"
},
{
    riddle: "What goes up but never comes down?",  
    answer1: "Your temperature", 
    answer2: "The sun", 
    answer3: "A balloon", 
    answer4: "Your age", 
    correct: "4"
} 
]