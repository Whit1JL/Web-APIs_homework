console.log("hellooo");

// Global Variables

var startButton = document.querySelector("#start");
var first = document.getElementById("first");
var quizTimer = document.getElementById("time-left");
var feedback = document.getElementById("feedback");
var timeSet = 100;
var answerDisplay = document.getElementById
var questionBox = document.getElementById("question-box");
var currentQuestion = 0;
var userScore = 0;
// display user Score 


var questions = [
    // change correct answer to actual one
    {
        title: "How can you add a comment in a JavaScript?",
        answers: ["'This is a comment", "//This is a comment", "<This is a comment>", "<!--This is a comment-->"],
        correctAnswer: "//This is a comment",
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onchange", "opportunity", "onmouseover", "onclick"],
        correctAnswer: "onclick",
    },
    {
        title: "What is the correct syntax to log something to the console?",
        answers: ["log.console", ".log.console", "console.log", "console.Log"],
        correctAnswer: "console.log",
    },
    {
        title: "How do you declare a JavaScript variable?",
        answers: ["variable carName", "v carName", "var carName", "carName"],
        correctAnswer: "var carName",
    },
    {
        title: "How does a FOR loop start?",
        answers: ["for(i--, i = 7, i > 5)", "for(i ! 0; i <= 5, i++)", "for(i+-, i < 7, i = 5)", "for(i = 0; i <= 5; i++)"],
        correctAnswer: "for(i = 0; i <= 5; i++)",
    },
    {
        title: "The Do While loop is the same thing as the While loop.",
        answers: ["false", "true"],
        correctAnswer: "false",
    },
    {
        title: "How do you find the minimum of x and y using JavaScript?",
        answers: ["Math.min(xy)", "min(x,y)", "min(xy)", "Math.min(x,y)"],
        correctAnswer: "Math.min(x,y)",
    },
    {
        title: "What does DOM represent?",
        answers: ["Document Objective Model", "Document Object Model", "Document Oblique Model"],
        correctAnswer: "Document Object Model",
    },
    {
        title: "Is JavaScript case-sensitive?",
        answers: ["Yes", "No"],
        correctAnswer: "Yes",
    },
    {
        title: "Which HTML element do we put JavaScript?",
        answers: ["<script>", "<hoisting>", "<js>", "<scripting>"],
        correctAnswer: "<script>",
    },
    {
        title: "What will the following code return: Boolean(20 > 7)?",
        answers: ["NaN", "True", "False", "Error"],
        correctAnswer: "True",
    },
    {
        title: "Which of the following will write the message 'Hello!' in an alert box?",
        answers: ["alert('Hello!')", "msgAlert('Hello!')", "alertBox('Hello!')", "alert(Hello!)"],
        correctAnswer: "alert('Hello!')",
    },
    {
        title: "What does JSON represent?",
        answers: ["JavaScript Output Notary", "JavaScript Object Notation", "JavaScript Objection Notation", "JavaScript O Notary"],
        correctAnswer: "JavaScript Object Notation",
    },
]

// create something that interacts with different possibilities when the user hover over it


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
``

}

// make buttons for answer choices 

function startQuiz() {

    // can get rid of coding quiz header


    first.classList.add("hide");
    // start the timer 
    quizTimer.textContent = timeSet;

    // create more of code above to hide different prompts on page!!!!!!!!!

    setInterval(decrementClock, 1000);

    getQuestion();

}

// create function that calls questions and possible answers
// create event listener that interacts with different possibilities when the user hover over it
// create message that shows if user answered correctly or not

function getQuestion() {
    // define outside of scope to grab 1st question in array

    // populate the question-box with question 
    questionBox.innerHTML = `
        <h3>${questions[currentQuestion].title}</h3>

    `

    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        // create a var for a button 
        var btn = document.createElement("button");
        // places answers inside button
        btn.innerText = questions[currentQuestion].answers[i];
        btn.addEventListener("click", checkAnswer)

        questionBox.append(btn);
    }
    // in above, add answers to box and wrap with button
}

// Create local storage for High Scores
// [ call body, nav, then h1 tag
// document.body.nav[0].h1[0].innerHTML = High Score;
// have code show high scores in numerical order based on highest-lowest
// have storage for the user to save initials and high score ]


// end quiz with conditions when questions run out with new div in html 
// 



// present a question 


function checkAnswer(event) {
    // have code to show if the user got answer correct or incorrect
    // add audio for correct or incorrect answers 
    event.preventDefault();

    console.log();

    if (event.target.innerText === questions[currentQuestion].correctAnswer) {
        feedback.innerHTML = "Correct!";
        feedback.style.color = "green";
        console.log("Yay");
        userScore++;
    }
    else {
        feedback.innerHTML = "Incorrect!";
        feedback.style.color = "red";
        console.log("Boo");
        timeSet -= 15;
    }

    currentQuestion++;
    getQuestion();
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