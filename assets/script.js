console.log("hellooo");

// Global Variables

var startButton = document.querySelector("#start");
var first = document.getElementById("first");
var quizTimer = document.getElementById("time-left");
var timeSet = 100;
var questionDisplay = document.getElementById("qAndA");
var answerDisplay = document.getElementById
// var questions =
// var choices = 
var highScores = document.querySelector("#highScores"); 


// array for global var. = questions and choices

var questions = [
    {
        title: "How can you add a comment in a JavaScript?",
        answers: ["'This is a comment", "//This is a comment", "<This is a comment>", "<!--This is a comment-->"],
        correctAnswer: "2",
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onchange", "opportunity", "onmouseover", "onclick"],
        correctAnswer: "4",
    },
    {
        title: "What is the correct syntax to log something to the console?",
        answers: ["log.console", ".log.console", "console.log", "console.Log"],
        correctAnswer: "3",
    },
    {
        title: "How do you declare a JavaScript variable?",
        answers: ["variable carName", "v carName", "var carName"],
        correctAnswer: "3",
    },
    {
        title: "How does a FOR loop start?",
        answers: ["for(i--, i = 7, i > 5)", "for(i = 0; i <= 5, i++)", "for(i+-, i < 7, i = 5)", "for(i = 0; i <= 5; i++)"],
        correctAnswer: "4",
    },
    {
        title: "The Do While loop is the same thing as the While loop?",
        answers: ["false", "true"],
        correctAnswer: "1",
    },
    {
        title: "How do you find the minimum of x and y using JavaScript?",
        answers: ["Math.min(xy)", "min(x,y)", "min(xy)", "Math.min(x,y)"],
        correctAnswer: "4",
    },
    {
        title: "What does DOM represent?",
        answers: ["Document Objective Model", "Document Object Model", "Document Oblique Model"],
        correctAnswer: "2",
    },
    {
        title: "Is JavaScript case-sensitive?",
        answers: ["Yes", "No"],
        correctAnswer: "1",
    },
    {
        title: "Which HTML element do we put JavaScript?",
        answers: ["<script>", "<hoisting>", "<js>", "<scripting>"],
        correctAnswer: "1",
    },
    {
        title: "What will the following code return: Boolean(20 > 7)?",
        answers: ["NaN", "True", "False", "Error"],
        correctAnswer: "2",
    },
    {
        title: "Which of the following will write the message 'Hello!' in an alert box?",
        answers: ["alert('Hello!')", "msgAlert('Hello!')", "alertBox('Hello!')", "alert(Hello!)"],
        correctAnswer: "1",
    },
    {
        title: "What does JSON represent?",
        answers: ["JavaScript Output Notary", "JavaScript Object Notation", "JavaScript Objection Notation", "JavaScript O Notary"],
        correctAnswer: "2",
    },
    {
        title: "How do you call a function named 'possibleChoices'?",
        answers: ["myFunction", "laughingRiver", "possibleChoices", "bobBurger"],
        correctAnswer: "3",
    },
]

// create function that calls questions and possible answers
// create event listener that interacts with different possibilities when the user hover over it
// create message that shows if user answered correctly or not

// can randomize questions? 
// 

// var = quizDiv querys
// 

// Functions

function decrementClock() {
    // timeSet decrement the value
    if (timeSet === 0) {
        // alert("Game Over") placeholder message 
        // function end game
        return;
    }
    timeSet--;
    quizTimer.textContent = timeSet;
    // create conditional to stop at 0

}


function startQuiz() {

    // can get rid of coding quiz header


    first.classList.add("hide");
    // start the timer 
    quizTimer.textContent = timeSet;

    // create more of code above to hide different prompts on page!!!!!!!!!

    setInterval(decrementClock, 1000);
}

// create function that calls questions and possible answers
// create event listener that interacts with different possibilities when the user hover over it
// create message that shows if user answered correctly or not

function getQuestion(event) {
    // define outside of scope to grab 1st question in array

    event.preventDefault();
    start.remove();

    var hidden = document.createElement("div");
    hidden.innerHTML = qAndA[0].title;

    questionDisplay.textContent = qAndA[0].title;
    console.log(questionDisplay);

    answerDisplay.textContent = qAndA[0].answers;
    console.log(questionDisplay, answerDisplay);

    // display the questions and answers and have it move ... 
}

// Create local storage for High Scores
// [ call body, nav, then h1 tag
// document.body.nav[0].h1[0].innerHTML = High Score;
// have code show high scores in numerical order based on highest-lowest

// have storage for the user to save initials and high score ]


const highScores = localStorage.setItem('highScores');
localStorage.setItem('highScores');



// present a question 


function checkAnswer() {
    // have code to show if the user got answer correct or incorrect
    // add audio for correct or incorrect answers 


}



// Event Listeners
startButton.addEventListener("click", startQuiz);

// add clear high scores button
// add go back button on high score storage 



// pseudo code by Jess: 
// create something for timeRemaining (subtract time by 10 seconds when user gets quiz incorrect)
// loop through 1 series of questions
// leave timer until the end
// when timer starts, present question
// when answer the question, present another question
// when time is 0, quiz is over
// have event selector that tells if the answer is correct or incorrect
// use last week's activities, especially activity 19! use event listener 