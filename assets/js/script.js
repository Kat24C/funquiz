// Selected Elements
const restartButton = document.getElementById('btn-begin');
const riddleQues = document.getElementById('riddles');
const riddleQuestions = document.getElementById('riddle-question');
const riddleAnswerA = document.getElementById('answer-btn1');
const riddleAnswerB = document.getElementById('answer-btn2');
const riddleAnswerC = document.getElementById('answer-btn3');
const riddleAnswerD = document.getElementById('answer-btn4');
const correctAnswer = document.getElementsByClassName('correct');
const wrongAnswer = document.getElementsByClassName('wrong');
const finalScore = document.getElementById('score');
const scoreCardIndex = document.getElementById('score-bar')


/* Riddle questions and answers */
const riddles = [{
    riddle: "What starts with an e and ends with an e but only has one letter in it?", 
    answer1: "an elephant",
    answer2: "an envelope",
    answer3: "an ewe", 
    answer4: "an eye",
    correct: 2, 
    asked: false
},
 {
    riddle: "What has to be broken before you can use it?", 
    answer1: "a package",  
    answer2: "an envelope",  
    answer3: "a box",  
    answer4: "an egg", 
    correct: 4,
    asked: false

},
{
    riddle: "What question can you never answer yes to?", 
    answer1: "Are you asleep yet?", 
    answer2: "Do you want a chocolate?", 
    answer3: "Are you happy?", 
    answer4: "Do you know the answer?",
    correct: 1,
    asked: false
},
{
    riddle: "What goes up but never comes down?",  
    answer1: "Your temperature", 
    answer2: "The sun", 
    answer3: "A balloon", 
    answer4: "Your age", 
    correct: 4,
    asked: false
},
{ 
    riddle: "What can you break, even if you never pick it up or touch it?",  
    answer1: "An egg", 
    answer2: "A promise", 
    answer3: "A lie", 
    answer4: "A glass", 
    correct: 2,
    asked: false
} 
]

let shuffleRiddles;
let currentRiddle = 0;
let riddleScore = 0;
let lastRiddle = riddles.length - 1;

restartButton.addEventListener('click', beginRiddles);
riddleAnswerA.addEventListener('click', function() { checkAnswer(1)});
riddleAnswerB.addEventListener('click', function() { checkAnswer(2)});
riddleAnswerC.addEventListener('click', function() { checkAnswer(3)});
riddleAnswerD.addEventListener('click', function() { checkAnswer(4)});

function beginRiddles() {
    restartButton.hidden = true;
    riddleQues.hidden = false;
    showNextQuestion();
    scoreCounter();
}

//Scrambles the questions so they are asked in different orders.
function nextQuestionId() {
    var id = Math.floor(Math.random()*riddles.length);
    while (riddles[id].asked){
        id = Math.floor(Math.random()*riddles.length);
    }
    return id;
}

function scoreCounter(){
    for(let colorScore = 0; colorScore <= lastRiddle; colorScore++){
        scoreCardIndex.innerHTML += "<div class='scoreCard' id="+ colorScore +"></div>";
    }
}

//Checks if there are more questions to be asked
function hasMoreQuestions() {
    for (let quiz = 0; quiz < lastRiddle; quiz++){
        if (!riddles[quiz].asked)
        {
            return true;
        }
    }
    return false;
}

/* Show the questions and checks if there are more questions
to be asked */
function showNextQuestion() {
    if (hasMoreQuestions()){
        currentRiddle = nextQuestionId();
        showRiddles();
    } else {
    showScore();
    }
}

/**
 * Shows the riddles and the riddle answers
 * changes the questions asked to true
 */
function showRiddles() {
    let r = riddles[currentRiddle];
    riddleQuestions.innerText = r.riddle;
    riddleAnswerA.innerText = r.answer1; 
    riddleAnswerB.innerText = r.answer2;  
    riddleAnswerC.innerText = r.answer3;  
    riddleAnswerD.innerText = r.answer4; 
    r.asked = true;
}

//Checks the answer and tells the user how they did.

function checkAnswer(answer) {
       if (answer == riddles[currentRiddle].correct){
        document.getElementById(currentRiddle).style.backgroundColor = "#00C59B";
        riddleScore++;
        } else {
            document.getElementById(currentRiddle).style.backgroundColor = "#A43563";
        }
       showNextQuestion();
    }
   

//Gives a message and total score to the user.
function showScore() { 
    riddleQues.hidden = true;
   if(riddleScore <= 1) {
       finalScore.textContent = `You got ${riddleScore} out of 5. Try harder next time.`
   } else if (riddleScore <= 3){
    finalScore.textContent = `You got ${riddleScore} out of 5. Good Try.`
   } else if (riddleScore = 4) {
    finalScore.textContent = `You got ${riddleScore} out of 5. Almost got it.`
   } else {
    finalScore.textContent = `You got ${riddleScore} out of 5. Fantastic.`
   }
   
}

function restartRiddle(riddle) {
    restartButton.hidden = false;
    currentRiddle = 0
}
