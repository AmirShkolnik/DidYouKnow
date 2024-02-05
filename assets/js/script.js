/**
 * Credit to this tutorial which I adapted for my own quiz: 
 * https://www.youtube.com/watch?v=PBcqGxrr9g8
 */

//Jungle quiz questions
//Question numer 1
let questions = [{
    question: "Which animal holds the title for being the largest in the jungle?",
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
    question: "What is the deadliest snake found in the jungle?",
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
    question: "Which bird is renowned for mimicking sounds and voices?",
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
    question: "What is the primary food source for many animals in the jungle?",
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
    question: "What is the most hazardous animal in the jungle?",
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
},
{ // Question numer 6
    question: "What percentage of the Earth's surface is covered with jungle and rainforest?",
    answers: [{
            text: "2%",
            correct: false
        },
        {
            text: "15%",
            correct: false
        },
        {
            text: "30%",
            correct: false
        },
        {
            text: "6%",
            correct: true
        },
    ]
},
{ // Question numer 7
    question: "The floor of the jungle is covered in___.",
    answers: [{
            text: "Leaves",
            correct: false
        },
        {
            text: "Tall grass",
            correct: false
        },
        {
            text: "Insects",
            correct: true
        },
        {
            text: "Stones",
            correct: false
        },
    ]
},
{ // Question numer 8
    question: 'The term "jungle" originates from the Sanskrit word "jangala". What does it mean?',
    answers: [{
            text: "Ocean",
            correct: false
        },
        {
            text: "Wet land",
            correct: false
        },
        {
            text: "Dry land",
            correct: true
        },
        {
            text: "Diverse land",
            correct: false
        },
    ]
},
{ // Question numer 9
    question: "How many countries and areas does the Amazon rainforest cover?",
    answers: [{
            text: "9",
            correct: true
        },
        {
            text: "5",
            correct: false
        },
        {
            text: "15",
            correct: false
        },
        {
            text: "35",
            correct: false
        },
    ]
},
{ // Question numer 10
    question: "In which part of the world do most tigers live in the jungle?",
    answers: [{
            text: "The North Pole",
            correct: false
        },
        {
            text: "North America",
            correct: false
        },
        {
            text: "Africa",
            correct: false
        },
        {
            text: "Asia",
            correct: true
        },
    ]
},
{ // Question numer 11
    question: "In the jungle, there is a well-known fish called the ___.",
    answers: [{
            text: "Salmon",
            correct: false
        },
        {
            text: "Shark",
            correct: false
        },
        {
            text: "Piranha",
            correct: true
        },
        {
            text: "Squid",
            correct: false
        },
    ]
},
{ // Question numer 12
    question: "In which part of the Earth are jungles mostly found?",
    answers: [{
            text: "Close to the oceans",
            correct: false
        },
        {
            text: "Close to the equator",
            correct: true
        },
        {
            text: "Close to the Artic circles",
            correct: false
        },
        {
            text: "Close To The Sahara Desert ",
            correct: false
        },
    ]
},
{ // Question numer 13
    question: "Which animal is the most dangerous in the African jungle?",
    answers: [{
            text: "Leopard",
            correct: true
        },
        {
            text: "Gorilla",
            correct: false
        },
        {
            text: "Elephant",
            correct: false
        },
        {
            text: "African black sugar ant",
            correct: false
        },
    ]
},
{ // Question numer 14
    question: "What distinguishes a rainforest from a jungle?",
    answers: [{
            text: "Jungles have fewer trees and more sunlight",
            correct: false
        },
        {
            text: "Rainforests are exclusive to Africa",
            correct: false
        },
        {
            text: "Rainforests get more rain",
            correct: true
        },
        {
            text: "Jungles are bigger",
            correct: false
        },
    ]
},
{ // Question numer 15
    question: "Which dangerous fish lives in the African jungle?",
    answers: [{
            text: "Killer whale",
            correct: false
        },
        {
            text: "Tiger fish",
            correct: true
        },
        {
            text: "Crocodile",
            correct: false
        },
        {
            text: "Hammerhead shark",
            correct: false
        },
    ]
},
{ // Question numer 16
    question: "What type of bird is a cockatoo?",
    answers: [{
            text: "Insect",
            correct: false
        },
        {
            text: "Owl",
            correct: false
        },
        {
            text: "Eagle",
            correct: false
        },
        {
            text: "Parrot",
            correct: true
        },
    ]
},
{ // Question numer 17
    question: "What does the orangutan like the most?",
    answers: [{
            text: "New Guinea rainforest",
            correct: false
        },
        {
            text: "The rainforest",
            correct: false
        },
        {
            text: "The African jungle",
            correct: false
        },
        {
            text: "The Asian jungle",
            correct: true
        },
    ]
},
{ // Question numer 18
    question: "In which part of the world do tigers make their home?",
    answers: [{
            text: "Africa",
            correct: false
        },
        {
            text: "South America",
            correct: false
        },
        {
            text: "Asia",
            correct: true
        },
        {
            text: "Southern Europe",
            correct: false
        },
    ]
},
{ // Question numer 19
    question: "Who is the author of 'The Jungle Book'?",
    answers: [{
            text: "JK Rowling",
            correct: false
        },
        {
            text: "CS Lewis",
            correct: false
        },
        {
            text: "Jacqueline Wilson",
            correct: false
        },
        {
            text: "Rudyard Kipling",
            correct: true
        },
    ]
},
{ // Question numer 20
    question: "How many animals in the world live in the jungle?",
    answers: [{
            text: "Over 20%",
            correct: false
        },
        {
            text: "Over 50%",
            correct: true
        },
        {
            text: "Over 80%",
            correct: false
        },
        {
            text: "Over 5%",
            correct: false
        },
    ]
}
];

// Question
const questionElement = document.getElementById("question");

// Quiz Area
const questionAreabox = document.getElementById("question_area_box");
const quizAreabox = document.getElementById("quiz_area_box");

// Buttons
const nextButton = document.getElementById("next-btn");
const quizButton = document.getElementById("quizbutton");
const homeButton = document.getElementById("home"); // Get the home button element

// Score display

const scoreDisplay = document.getElementById("scoreDisplay");

// Hide the home button initially
homeButton.style.display = "none";

// Declaring two changeable variables, 'score' and 'question', using the 'let'.
let currentQuestionIndex = 0;
let score = 0;


// Shuffle the answers array function - using Fisher Yates Shuffle
// Credit to this tutorial which I adapted for my own quiz: 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

// Start the quiz function by doing a few things:

function start() {
    // When starting the quiz it sets the current question number and score to zero
    questions = shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    questionAreabox.style.display = "block"; // Shows the area where questions will appear
    quizAreabox.style.display = "none"; // Hides the home page 
    nextButton.innerHTML = "Next"; // Changes the text on the button to "Next".
    showQuestion(); // Display the first question
    scoreDisplay.style.display = "block"; // Show the score display button
    updateScoreDisplay(); // Reset the score display to show the initial score
    homeButton.style.display = "none"; // Hide the home button

}

// Function to update the score display
function updateScoreDisplay() {
    scoreDisplay.textContent = "Score: " + score;
}

/* Displaying the current question to the user. 
   Questions are stored in questions.js*/

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
        button.addEventListener('click', selectAnswer); // When clicking the answer button it will trigger the selectAnswer Function
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

    // Checks whether the selected answer is correct.
    if (isCorrect) {
        // 
        selectedBtn.innerHTML = "The Answer Is: " + selectedBtn.innerHTML;
        selectedBtn.classList.add("correct");
        score++;
        updateScoreDisplay();

        // else is triggered when the selected answer is incorrect.
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Array.from is employed to convert the collection of child elements of quizButton into an array.
    Array.from(quizButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            if (button !== selectedBtn) {
                button.innerHTML = "The Answer Is: " + button.innerHTML;
            }
        }
        // After selecting an answer buttons are unclickable
        button.disabled = true;
    });

    // Show correct answer briefly before moving to the next question
    setTimeout(() => {
        handelNextButton();
    }, 2000); // Delay for 2 seconds (2000 milliseconds)
}

// Display score and feedback
function showScore() {
    resetState();
    let message;
    if (score === 5) {
        message = "Great job! You scored 5 out of 5!";
    } else if (score > 0 && score < 5) {
        message = `Your result: ${score} out of 5 Keep improving!`;
    } else {
        message = "Try again! You didn't score any points";
    }
    questionElement.innerHTML = message;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    homeButton.style.display = "block";
}

/* This event listener ensures that when the "Next" button is clicked, 
the quiz progresses to the next question if available or restarts the quiz if all questions 
have been answered. - (NEXT BUTTON IS HIDEN, IT DISPLAYS AT THE END AS PLAY AGAIN)*/

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < 5) {
        handelNextButton();
    } else {
        start();
    }

});

function handelNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        showQuestion();
    } else {
        showScore();
        scoreDisplay.style.display = "none"; // Hide the score display button
    }

}

// This function populates the 'quiz_area_box' element with quiz rules and instructions.
function rules() {
    "use strict";
    // Get the elements with the respective IDs
    let rulesAreabox = document.getElementById("rules_box");

    // Hide the quiz area box
    quizAreabox.style.display = "none";

    // Check if the 'rules_box' element exists
    if (rulesAreabox) {
        rulesAreabox.style.display = "block"; // Display the rules
    }

    // Hide the rules when the gamer clicks start
    document.getElementById("rules_str_btn").addEventListener("click", function () {
        rulesAreabox.style.display = "none";
    });
}

// This function reloads the current page when called, effectively acting as a "go back" action.
function goBack() {
    'use strict';
    window.location.reload();
}

// Buttons event listeners
document.getElementById('rules-btn').addEventListener('click', rules);
document.getElementById('start-btn').addEventListener('click', start);
document.getElementById('home').addEventListener('click', goBack);
document.getElementById('back_btn').addEventListener('click', goBack);
document.getElementById('rules_str_btn').addEventListener('click', start);