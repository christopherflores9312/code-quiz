// select elements from the DOM
const startButton = document.querySelector('#start-button');
const quizSection = document.querySelector('#quiz');
const gameOverSection = document.querySelector('#game-over');
const scoreDisplay = document.querySelector('#score');
const initialsInput = document.querySelector('#initials');
const timerDisplay = document.querySelector('#timer');

// add a click event listener to the start button
startButton.addEventListener('click', startQuiz);

// set up variables
let timerInterval;
let timer = 120; // in seconds
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
    // Set a variable to hold the interval ID returned by setInterval
    timerInterval = setInterval(function () {
        // Decrement the timer variable by 1
        timer--;
        // Update the text content of the timerDisplay element to display the updated timer value
        timerDisplay.textContent = `Time: ${timer}`;
        // If the timer reaches 0 or below, stop the interval and call the endGame function
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
    // get the current question from the questions array
    document.querySelector('#quiz h2').textContent = `Question ${currentQuestionIndex + 1}:`;
    // update the question number in the DOM
    document.querySelector('#quiz p').textContent = currentQuestion.question;
    // update the question text in the DOM
    const answerButtons = document.querySelectorAll('#quiz button');
    // get all answer buttons from the DOM
    answerButtons.forEach((button, i) => {
        button.textContent = currentQuestion.answers[i];
        button.dataset.index = button.getAttribute("data-ans");
        // set the text for each answer button
        button.removeEventListener('click', answerButtonClickHandler);
        // remove the click event listener for each button
        button.addEventListener('click', answerButtonClickHandler);
        // add the click event listener for each button
    });
}


// This function handles the click event for answer buttons.
function answerButtonClickHandler() {
    const isCorrect = checkAnswer(this.dataset.index); // check if the clicked answer is correct
    if (isCorrect) {
        score += 10; // if the answer is correct, add 10 points to the score
    } else {
        subtractTime(); // if the answer is incorrect, subtract 10 seconds from the timer
    }
    currentQuestionIndex++; // move on to the next question
    if (currentQuestionIndex < questions.length) {
        presentQuestion(); // if there are more questions, present the next question
    } else {
        endGame(); // if all questions have been answered, end the game
    }
}

// This function checks if the selected answer is correct.
function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex]; // get the current question
    //return answer === currentQuestion.correctAnswerIndex; // check if the selected answer index is equal to the correct answer index
    if(parseInt(answer) === currentQuestion.correctAnswerIndex){
        return true;
    }else {
        return false;
    }
}

// This function subtracts 10 seconds from the timer.
function subtractTime() {
    timer -= 10; // subtract 10 seconds from the timer
    timerDisplay.textContent = `Time: ${timer}`; // update the timer display in the DOM
}

// This function ends the game and displays the game over screen.
function endGame() {
    clearInterval(timerInterval); // stop the timer
    quizSection.style.display = 'none'; // hide the quiz section
    gameOverSection.style.display = 'block'; // show the game over section
    scoreDisplay.textContent = score; // display the final score
    // add a submit event listener to the form
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const initials = initialsInput.value.trim().toUpperCase(); // get the initials input and convert to uppercase
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

// This function saves the initials and score.
function saveScore(initials, score) {
    // save the initials and score
}
