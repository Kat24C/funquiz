let restartButton = document.getElementById('btn-begin');
let riddleQues = document.getElementById('riddles');

restartButton.addEventListener('click', beginRiddles);

function beginRiddles() {
    restartButton.classList.add('hide');
    riddleQues.classList.remove('hide');
}

function selectedRiddle() {

}

function nextRiddle() {

}

function correctScore() { 

}

const riddles = [{
    riddle: "What starts with an e and ends with an e but only has one letter in it?", 
    answer: [{choice: "an elephant", correct: false}, 
    {choice: "an envelope", correct: true}, 
    {choice: "an ewe", correct: false}, 
    {choice: "an eye", correct: false}
]
}, {
    riddle: "What has to be broken before you can use it?", 
    answer: [ {choice: "a package", correct: false}, 
    {choice: "an envelope", correct: false}, 
    {choice: "a box", correct: false}, 
    {choice: "an egg", correct: true} 
]
}, {
    riddle: "What question can you never answer yes to?", 
    answer: [{choice: "Are you asleep yet?", correct: true}, 
    {choice: "Do you want a chocolate?", correct: false}, 
    {choice: "Are you happy?", correct: false}, 
    {choice: "Do you know the answer?", correct: false}
]
}, {
    riddle: "What goes up but never comes down?",  
    answer: [{choice: "Your temperature", correct: false}, 
    {choice: "The sun", correct: false}, 
    {choice: "The time", correct: false}, 
    {choice: "Your age", correct: true},
    ]
} 
]