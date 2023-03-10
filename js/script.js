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
    // hide the start screen
    document.querySelector('#start-screen').style.display = 'none';
    // show the quiz section
    quizSection.style.display = 'block';
    // start the timer
    timerInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = `Time: ${timer}`;
        if (timer <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
    // present the first question
    presentQuestion();
}

function presentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    // update the question and answer options in the DOM
    document.querySelector('#quiz h2').textContent = `Question ${currentQuestionIndex + 1}:`;
    document.querySelector('#quiz p').textContent = currentQuestion.question;
    const answerButtons = document.querySelectorAll('#quiz button');
    answerButtons.forEach((button, i) => {
        button.textContent = currentQuestion.answers[i];
        button.removeEventListener('click', answerButtonClickHandler);
        button.addEventListener('click', answerButtonClickHandler);
    });
}

function answerButtonClickHandler() {
    const isCorrect = checkAnswer(this.dataset.index);
    if (isCorrect) {
        score += 10;
    } else {
        subtractTime();
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        presentQuestion();
    } else {
        endGame();
    }
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    return answer === currentQuestion.correctAnswerIndex;
}

function subtractTime() {
    // subtract time from the timer
    timer -= 10;
    timerDisplay.textContent = `Time: ${timer}`;
}

function endGame() {
    // stop the timer
    clearInterval(timerInterval);
    // hide the quiz section
    quizSection.style.display = 'none';
    // show the game over section
    gameOverSection.style.display = 'block';
    // display the final score
    scoreDisplay.textContent = score;
    // add a submit event listener to the form
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const initials = initialsInput.value.trim().toUpperCase();
        // validate the initials input
        if (initials.length > 0 && initials.length <= 3) {
            // save the score and initials to local storage
            const scores = JSON.parse(localStorage.getItem('scores')) || [];
            scores.push({ initials, score });
            localStorage.setItem('scores', JSON.stringify(scores));
            // redirect to the high scores page
            window.location.href = 'high-scores.html';
        }
    });
}

function saveScore(initials, score) {
    // save the initials and score
}
