// Selecting an HTML element by its ID and storing it as a constant variable.
const questionElement = document.getElementById("question");
const questionAreabox = document.getElementById("question_area_box");
const quizAreabox = document.getElementById("quiz_area_box");
const nextButton = document.getElementById("next-btn");
const quizButton = document.getElementById("quizbutton");
const homeButton = document.getElementById("home"); // Get the home button element


// Hide the home button initially
homeButton.style.display = "none";

// Declaring two changeable variables, 'score' and 'question', using the 'let'.
let currentQuestionIndex = 0;
let score = 0;



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
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

const scoreDisplay = document.getElementById("scoreDisplay");

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

    if (isCorrect) {
        // 
        selectedBtn.innerHTML = "The Answer Is: " + selectedBtn.innerHTML;
        selectedBtn.classList.add("correct");
        score++;
        updateScoreDisplay();
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

  // Show correct answer briefly before moving to the next question
  setTimeout(() => {
    handelNextButton();
}, 2000); // Delay for 2 seconds (2000 milliseconds)
}

function showScore() {
    resetState();
    let message;
    if (score === questions.length) {
        message = "GREAT JOB! You scored 5 out of 5!";
    } else if (score > 0 && score < questions.length) {
        message = `Your result: ${score} out of ${questions.length}. Keep improving!`;
    } else {
        message = "Try again! You didn't score any points.";
    }
    questionElement.innerHTML = message;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    homeButton.style.display = "block";
}

function handelNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < 5){
        showQuestion();
    }else{
        showScore();
        scoreDisplay.style.display = "none"; // Hide the score display button
    }
    
}

/* This event listener ensures that when the "Next" button is clicked, 
the quiz progresses to the next question if available or restarts the 
quiz if all questions have been answered.*/

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){handelNextButton();}else{
    start();
}

} );



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
    document.getElementById("rules_str_btn").addEventListener("click", function() {
        rulesAreabox.style.display = "none";
    });
}


// This function reloads the current page when called, effectively acting as a "go back" action.
function goBack() {
    'use strict';
    window.location.reload();
}


document.getElementById('rules-btn').addEventListener('click', rules);
document.getElementById('start-btn').addEventListener('click', start);
document.getElementById('home').addEventListener('click', goBack);
document.getElementById('back_btn').addEventListener('click', goBack);
document.getElementById('rules_str_btn').addEventListener('click', start);

