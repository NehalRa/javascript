const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('right-answers');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

function updateScore() {
    scoreElement.innerText = `Score: ${quizScore}`;
}


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});


function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    quizScore = 0;
    updateScore();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    if (correct) {
        quizScore++;
    }
    updateScore();
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateScore() {
    scoreElement.innerText = `Score: ${quizScore}`;
}

const questions = [
    {
        question: 'Which one of these is a JavaScript framework?',
        answers: [
            { text: 'Python', correct: false },
            { text: 'Django', correct: false },
            { text: 'React', correct: true },
            { text: 'Java', correct: false },
        ],
    },
    {
        question: 'Who is the Prime Minister of India?',
        answers: [
            { text: 'Narendra Modi', correct: true },
            { text: 'Rahul Gandhi', correct: false },
        ],
    },
    {
        question: 'What is 4 * 3?',
        answers: [
            { text: '6', correct: false },
            { text: '12', correct: true },
            { text: '10', correct: false },
        ],
    },
    {
        question: 'Which of these is a commonly used programming language for web development?',
        answers: [
            { text: 'HTML', correct: true },
            { text: 'C++', correct: false },
            { text: 'Python', correct: false },
            { text: 'Java', correct: false },
        ],
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Colorful Style Sheets', correct: false },
        ],
    },
    {
        question: 'Which HTML element is used to define a footer for a document or section?',
        answers: [
            { text: '<footer>', correct: true },
            { text: '<bottom>', correct: false },
            { text: '<section>', correct: false },
            { text: '<foot>', correct: false },
        ],
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false },
            { text: '<js>', correct: false },
            { text: '<scripting>', correct: false },
        ],
    },
    {
        question: 'What is the correct syntax for referring to an external script called "script.js"?',
        answers: [
            { text: '<script src="script.js">', correct: true },
            { text: '<script href="script.js">', correct: false },
            { text: '<script ref="script.js">', correct: false },
            { text: '<script name="script.js">', correct: false },
        ],
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        answers: [
            { text: '=', correct: true },
            { text: '*', correct: false },
            { text: '-', correct: false },
            { text: '/', correct: false },
        ],
    },
    {
        question: 'Which of the following is a loop structure in JavaScript?',
        answers: [
            { text: 'for', correct: true },
            { text: 'foreach', correct: false },
            { text: 'loop', correct: false },
            { text: 'repeat', correct: false },
        ],
    },
    {
        question: 'How do you declare a JavaScript variable?',
        answers: [
            { text: 'var carName;', correct: true },
            { text: 'variable carName;', correct: false },
            { text: 'v carName;', correct: false },
            { text: 'carName;', correct: false },
        ],
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: [
            { text: 'onchange', correct: false },
            { text: 'onclick', correct: true },
            { text: 'onmouseclick', correct: false },
            { text: 'onmouseover', correct: false },
        ],
    },
];
