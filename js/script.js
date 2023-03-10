// select elements from the DOM
const startButton = document.querySelector('#start-button');
const quizSection = document.querySelector('#quiz');
const gameOverSection = document.querySelector('#game-over');
const scoreDisplay = document.querySelector('#score');
const initialsInput = document.querySelector('#initials');
const timerDisplay = document.querySelector('#timer');

startButton.addEventListener('click', startQuiz);

// set up variables
let timerInterval;
let timer = 60; // in seconds
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    // start the timer
    // present the first question
}
  
function presentQuestion() {
// present a question
// wait for an answer
// check if the answer is correct
// if correct, present the next question
// if incorrect, subtract time from the timer and present the next question
}

function checkAnswer(answer) {
// check if the answer is correct
// if correct, return true
// if incorrect, return false
}

function subtractTime() {
// subtract time from the timer
}

function endGame() {
// stop the timer
// present the score
// ask the user to save their initials and score
}

function saveScore(initials, score) {
// save the initials and score
}
  