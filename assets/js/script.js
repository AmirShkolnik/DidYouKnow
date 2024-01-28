// Jungle quiz questions
//Question numer 1
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
    { // Question numer 2
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
    { // Question numer 3
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
    { // Question numer 4
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
    { // Question numer 5
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

// Selecting an HTML element by its ID and storing it as a constant variable.
const questionElement = document.getElementById("question");
const questionAreabox = document.getElementById("question_area_box");
const quizAreabox = document.getElementById("quiz_area_box");
const nextButton = document.getElementById("next-btn");
const quizButton = document.getElementById("quizbutton");

// Declaring two changeable variables, 'score' and 'question', using the 'let'.
let currentQuestionIndex = 0;
let score = 0;

// Start the quiz function by doing a few things:

function start() {
    // When starting the quiz it sets the current question number and score to zero
    currentQuestionIndex = 0; 
    score = 0;
    questionAreabox.style.display = "block"; // Shows the area where questions will appear
    quizAreabox.style.display = "none"; // Hides the home page 
    nextButton.innerHTML = "Next"; // Changes the text on the button to "Next".
    showQuestion(); // Display the first question
}

// Displaying the current question to the user.

function showQuestion() {
    resetState(); // Reseting the state of the quiz aka previous questions and answers

    let currentQuestion = questions[currentQuestionIndex]; // Changeable variable to display the current question
    let questionNo = currentQuestionIndex + 1; // Changeable variable to display the question number to the user

    /* Updating the innerHTML to show the current question and number to the user. 
    For exp. - 1. What is the largest animal in the jungle?*/

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    /* After displaying the question we must display the answers on the right buttons */

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; // Displaying the answer text from the questions above
        button.classList.add("answerbutton"); // Displaying the answerbutton class from the css
        quizButton.appendChild(button); // Displaying const button in the div id="quizbutton"

        /*  Checking if the current answer option is marked as correct. 
        If it is marked as correct, it sets a custom attribute on 
        the button called "correct" using the dataset property.*/
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer) // When clicking the answer button it will trigger the selectAnswer Function
    });
}


// Remove previous questions and answers
function resetState() {
    nextButton.style.display = "none"; // As defult the next button should hide
    // This loop removes all answers from the div id="quizbutton". clearing out any previously displayed answer.
    while (quizButton.firstChild) { 
        quizButton.removeChild(quizButton.firstChild);
    }
}

function selectAnswer(e) {
    
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; 

    if (isCorrect) {
        // 
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


