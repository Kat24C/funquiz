let restartButton = document.getElementById('btn-begin');
let riddleQues = document.getElementById('riddles');
let riddleQuestions = document.getElementById('riddle-question')
let riddleAnswer = document.getElementsByClassName('answer-btn')
let shuffleRiddles;
let currentRiddle;

restartButton.addEventListener('click', beginRiddles);

function beginRiddles() {
    restartButton.hidden = true;
    riddleQues.hidden = false;
    shuffleRiddleQuestions();
}
function shuffleRiddleQuestions() {
    for (let quiz = riddles.length - 1; quiz > 0; --i ){
        this.riddleIndex = 0;
    shuffleRiddles = riddles.sort(() => Math.random() - 0.5);
    showRiddles(quiz)
    }
}

function showRiddles(riddle) {
    riddleQuestions.innerText = riddles.riddle;
    
}

function nextQuestion() {

}

function correctScore() { 

}

const riddles = [{
    riddle: "What starts with an e and ends with an e but only has one letter in it?", 
    answers: [{choice: "an elephant", correct: false}, 
    {choice: "an envelope", correct: true}, 
    {choice: "an ewe", correct: false}, 
    {choice: "an eye", correct: false}
]
}, {
    riddle: "What has to be broken before you can use it?", 
    answers: [ {choice: "a package", correct: false}, 
    {choice: "an envelope", correct: false}, 
    {choice: "a box", correct: false}, 
    {choice: "an egg", correct: true} 
]
}, {
    riddle: "What question can you never answer yes to?", 
    answers: [{choice: "Are you asleep yet?", correct: true}, 
    {choice: "Do you want a chocolate?", correct: false}, 
    {choice: "Are you happy?", correct: false}, 
    {choice: "Do you know the answer?", correct: false}
]
}, {
    riddle: "What goes up but never comes down?",  
    answers: [{choice: "Your temperature", correct: false}, 
    {choice: "The sun", correct: false}, 
    {choice: "The time", correct: false}, 
    {choice: "Your age", correct: true},
    ]
} 
]