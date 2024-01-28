const questions = [{
        question: "What is the largest animal in the jungle?",
        answers: [{
                text: "Elephant",
                correct: true
            },
            {
                text: "Gorilla",
                correct: false
            },
            {
                text: "Hippopotamus",
                correct: false
            },
            {
                text: "Tiger",
                correct: false
            },
        ]
    },
    {
        question: "What is the most venomous snake found in the jungle?",
        answers: [{
                text: "Cobra",
                correct: false
            },
            {
                text: "Viper",
                correct: false
            },
            {
                text: "Mamba",
                correct: false
            },
            {
                text: "Taipan",
                correct: true
            },
        ]
    },
    {
        question: "Which bird is known for imitating sounds and voices?",
        answers: [{
                text: "Hawk",
                correct: false
            },
            {
                text: "Parrot",
                correct: true
            },
            {
                text: "Toucan",
                correct: false
            },
            {
                text: "Owl",
                correct: false
            },
        ]
    },
    {
        question: "What is the primary source of food for many jungle animals?",
        answers: [{
                text: "Grass",
                correct: false
            },
            {
                text: "Fruits",
                correct: true
            },
            {
                text: "Insects",
                correct: false
            },
            {
                text: "Fish",
                correct: false
            },
        ]
    },
    {
        question: "Which is the most dangerous animal in the jungle?",
        answers: [{
                text: "Lion",
                correct: false
            },
            {
                text: "Anaconda",
                correct: false
            },
            {
                text: "Crocodile",
                correct: true
            },
            {
                text: "Rhino",
                correct: false
            },
        ]
    }
];

const questionElement = document.getElementById("question");
const questionAreabox = document.getElementById("question_area_box");
const quizAreabox = document.getElementById("quiz_area_box");
const nextButton = document.getElementById("next-btn");
const quizButton = document.getElementById("quizbutton");

let currentQuestionIndex = 0;
let score = 0;

function start() {

    currentQuestionIndex = 0;
    score = 0;
    questionAreabox.style.display = "block";
    quizAreabox.style.display = "none";
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    // For exp. - 1. What is the largest animal in the jungle?
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answerbutton");
        quizButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
       
    });
}

function resetState() {
// Remove previous answers
    nextButton.style.display = "none";
    while (quizButton.firstChild) {
        quizButton.removeChild(quizButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.innerHTML = "The Answer Is: " + selectedBtn.innerHTML;
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(quizButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            if (button !== selectedBtn) {
                button.innerHTML = "The Answer Is: " + button.innerHTML;
            }
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
    
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){handelNextButton();}else{
    start();
}

} );

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

// This function reloads the current page when called, effectively acting as a "go back" action.
function goBack() {
    'use strict';
    window.location.reload();
}

 // Get the timer element
 let timerElement = document.getElementById('timer');
  
 // Set the initial time
 let currentTime = parseInt(timerElement.innerHTML);

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

// Function to stop the timer
function stopTimer() {
    clearInterval(intervalId); // Clear the interval
}

 // Event listener to stop the timer when user interacts with the quiz
quizButton.addEventListener('click', stopTimer);
nextButton.addEventListener('click', stopTimer);


