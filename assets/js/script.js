const questions = [
    {
        question: "What is the largest animal in the jungle?",
        answers: [
            { text: "Elephant", correct: true },
            { text: "Gorilla", correct: false },
            { text: "Hippopotamus", correct: false },
            { text: "Tiger", correct: false },
        ]
    },
    {
        question: "What is the tallest tree found in the jungle?",
        answers: [
            { text: "Oak", correct: false },
            { text: "Baobab", correct: false },
            { text: "Redwood", correct: false },
            { text: "Kapok", correct: true },
        ]
    },
    {
        question: "Which bird is known for imitating sounds and voices?",
        answers: [
            { text: "Hawk", correct: false },
            { text: "Parrot", correct: true },
            { text: "Toucan", correct: false },
            { text: "Owl", correct: false },
        ]
    },
    {
        question: "What is the primary source of food for many jungle animals?",
        answers: [
            { text: "Grass", correct: false },
            { text: "Fruits", correct: true },
            { text: "Insects", correct: false },
            { text: "Fish", correct: false },
        ]
    },
    {
        question: "Which is the most dangerous animal in the jungle?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Anaconda", correct: false },
            { text: "Crocodile", correct: true },
            { text: "Rhino", correct: false },
        ]
    }
];

const questionAreabox = document.getElementById("question_area_box");
const quizAreabox = document.getElementById("quiz_area_box");
const nextButton = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const quizButton = document.getElementById("quizbutton");

let currentQuestionIndex = 0;
let score = 0;

function start() {
    
    currentQuestionIndex = 0;
    score = 0;
    questionAreabox.style.display = "block";
    quizAreabox.style.display = "none";
    showQuestion();
    countdown();
    
}

function showQuestion() {

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const newButton = document.createElement("newbutton");
        newButton.innerHTML = answer.text;
        newButton.classList.add("answerbutton");
        quizButton.appendChild(newButton);
    });
}

function resetState () {

    nextButton.style.display = "none";
    while(quizButton.firstChild) {
        quizButton.removeChild(answerButtons.firstChild);
    }
}



// This function populates the 'quiz_area_box' element with quiz rules and instructions.
function rules() {
    "use strict";
    // Get the element with the id 'quiz_area_box'
    let rulesAreabox = document.getElementById("quiz_area_box");
    // Check if the 'quiz_area_box' element exists
    if (rulesAreabox) {
        // If it exists, set its innerHTML to the specified content
        rulesAreabox.innerHTML = `
            <h1 id="headline_rules" class="heading">Follow The Rules</h1>
            <div class="quiz-button">
                <p>A fun and fact-filled questionnaire that will challenge your knowledge about the chemistry we are surrounded with.</p>
                <br>
                <p>This quiz consists of Multiple Choice Questions. Use your best guess and click on the answer.</p>
                <br>
                <p>Right answers will appear green and wrong ones in red. Scores will appear right away.</p>
                <br>
                <p>Ready to challenge yourself?</p>
                <br>
                <button id="back_btn" class="button" aria-label="back" onclick="goBack()">Back</button>
            </div>
        `;
    }
}

        // Get the timer element
        let timerElement = document.getElementById("timer");

        // Get the start timer button element
        let startTimerButton = document.getElementById("start_timer");

        // Set the initial time
        let currentTime = parseInt(timerElement.innerHTML);

        // Display initial time
        timerElement.innerHTML = "Time left: " + currentTime;

        // Define the countdown function
        function countdown() {
            currentTime--; // Decrement the current time by 1
            timerElement.innerHTML = "Time left: " + currentTime; // Update the timer display with the text "Time left:"

            // If countdown reaches 0, stop the timer
            if (currentTime <= 0) {
                clearInterval(intervalId);
                timerElement.innerHTML = "Time's up!";
                startTimerButton.style.display = "block";

            }
        }

        // Call the countdown function every second (1000 milliseconds)
        const intervalId = setInterval(countdown, 1000);

// This function reloads the current page when called, effectively acting as a "go back" action.
function goBack() {
    'use strict';
    window.location.reload();
}