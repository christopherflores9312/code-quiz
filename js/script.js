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

// define the quiz questions and answers
const questions = [
    {
      question: 'What is CSS?',
      answers: ['Cascading Style Syntax', 'Cascading System Syntax', 'Cascading Style Sheet', 'Computer Style Syntax'],
      correctAnswerIndex: 2
    },
    {
      question: 'Which of the following is not a valid way to declare a JavaScript variable?',
      answers: ['let myVar = 42;', 'var myVar = 42;', 'const myVar = 42;', 'myVar = 42;'],
      correctAnswerIndex: 3
    },
    {
      question: 'Which of the following is a valid way to create a new object in JavaScript?',
      answers: ['let obj = {}', 'let obj = new Object()', 'let obj = Object.create()', 'All of the above'],
      correctAnswerIndex: 3
    },
    {
      question: 'Which of the following is a valid way to add a new element to the end of an array in JavaScript?',
      answers: ['myArray.push(newElement)', 'myArray.unshift(newElement)', 'myArray.concat(newElement)', 'myArray.splice(myArray.length, 0, newElement)'],
      correctAnswerIndex: 0
    },
    {
      question: 'What is the difference between let and var in JavaScript?',
      answers: ['let is used for block-scoped variables, while var is used for function-scoped variables.', 'let is used for function-scoped variables, while var is used for block-scoped variables.', 'There is no difference between let and var.', 'let is a reserved keyword in JavaScript, while var is not.'],
      correctAnswerIndex: 0
    }
  ];

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
  