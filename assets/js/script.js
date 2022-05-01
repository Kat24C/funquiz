// Selected Elements
const beginButton = document.getElementById('btn-begin');
const restartRiddleButton = document.getElementById('btn-restart');
const riddleQues = document.getElementById('riddles');
const riddleQuestions = document.getElementById('riddle-question');
const riddleAnswerA = document.getElementById('answer-btn1');
const riddleAnswerB = document.getElementById('answer-btn2');
const riddleAnswerC = document.getElementById('answer-btn3');
const riddleAnswerD = document.getElementById('answer-btn4');
const finalScore = document.getElementById('score');
const scoreCardIndex = document.getElementById('score-bar');
/* Riddle questions and answers */
let riddles = [{
    riddle: "What starts with an e and ends with an e but only has one letter in it?",
    answer1: "an elephant",
    answer2: "an envelope",
    answer3: "an ewe",
    answer4: "an eye",
    correct: 2
},
 {
    riddle: "What has to be broken before you can use it?",
    answer1: "a package",
    answer2: "an envelope",
    answer3: "a box",
    answer4: "an egg",
    correct: 4
},
{
    riddle: "What question can you never answer yes to?",
    answer1: "Are you asleep yet?",
    answer2: "Do you want a chocolate?",
    answer3: "Are you happy?",
    answer4: "Do you know the answer?",
    correct: 1
},
{
    riddle: "What goes up but never comes down?",
    answer1: "Your temperature",
    answer2: "The sun",
    answer3: "A balloon",
    answer4: "Your age",
    correct: 4
},
{
    riddle: "What can you break, even if you never pick it up or touch it?",
    answer1: "An egg",
    answer2: "A promise",
    answer3: "A lie",
    answer4: "A glass",
    correct: 2
},
{
    riddle: "What gets wet while drying?",
    answer1: "A teabag",
    answer2: "A Facecloth",
    answer3: "A towel",
    answer4: "A blanket",
    correct: 3
},
{
    riddle: "You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?",
    answer1: "A kerosene lamp",
    answer2: "A candle",
    answer3: "A match",
    answer4: "A fireplace",
    correct: 3
},
{
    riddle: "I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?",
    answer1: "Your shadow",
    answer2: "The sky",
    answer3: "A cloud",
    answer4: "The sun",
    correct: 1
}
];
let finalTotal = riddles.length;
let currentRiddle = 0;
let riddleScore = 0;
let lastRiddle = riddles.length - 1;
let orderQuestion = currentRiddle;

/* Add eventListeners to start and answer buttons */
beginButton.addEventListener('click', beginRiddles);
restartRiddleButton.addEventListener('click', restartRiddle);
riddleAnswerA.addEventListener('click', function() { checkAnswer(1);});
riddleAnswerB.addEventListener('click', function() { checkAnswer(2);});
riddleAnswerC.addEventListener('click', function() { checkAnswer(3);});
riddleAnswerD.addEventListener('click', function() { checkAnswer(4);});

function beginRiddles() {
    beginButton.hidden = true;
    riddleQues.hidden = false;
    showNextQuestion();
    scoreCounter();
    // shuffle array
    riddles = riddles.sort(() => Math.random() - 0.5);
}
//Shows the user if they have the answer right or wrong. 
function scoreCounter(){
    let colorScore;
    for(colorScore = 0; colorScore <= lastRiddle; colorScore++){
        scoreCardIndex.innerHTML += "<div class='scoreCard' id="+ colorScore +"></div>";
    }
}
/* Show the questions and checks if there are more questions
to be asked */
function showNextQuestion() {
    if (riddles.length > 0) {
        let index = Math.floor(Math.random() * riddles.length);
        currentRiddle = riddles[index];
        riddles.splice(index, 1);
        showRiddles();
    }
    else {
        showScore();
    }
}
// Shows the riddles to the user
function showRiddles() {
    let r = currentRiddle;
    riddleQuestions.innerText = r.riddle;
    riddleAnswerA.innerText = r.answer1;
    riddleAnswerB.innerText = r.answer2;
    riddleAnswerC.innerText = r.answer3;
    riddleAnswerD.innerText = r.answer4;
}
//Checks the answer and tells the user how they did.
function checkAnswer(answer) {
       if (answer === currentRiddle.correct){
            document.getElementById(orderQuestion++).style.backgroundColor = "#00C59B";
        riddleScore++;
        } else {
            document.getElementById(orderQuestion++).style.backgroundColor = "#A43563";
        }
       showNextQuestion();
    }
//Gives a message and total score to the user.
function showScore() {
    riddleQues.hidden = true;
   if(riddleScore <= 2) {
       finalScore.textContent = `You got ${riddleScore} out of ${finalTotal}. Better luck next time.`;
    } else if (riddleScore <= 4){
        finalScore.textContent = `You got ${riddleScore} out of ${finalTotal}. Good Try.`;
   } else if (riddleScore <= 6) {
       finalScore.textContent = `You got ${riddleScore} out of ${finalTotal}. Almost got it.`;
   } else {
       finalScore.textContent = `You got ${riddleScore} out of ${finalTotal}. Fantastic.`;
   }
   restartRiddleButton.classList.remove('hide');
   restartRiddleButton.classList.add('show');
}
// Restarts the riddle questions
function restartRiddle() {
    window.location.reload();
}