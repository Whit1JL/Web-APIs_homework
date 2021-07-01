// Global Variables

// start button variable 
var startButton = document.querySelector("#start");

// starting elements on the page
var first = document.getElementById("first");

// called id time left for the timer 
var quizTimer = document.getElementById("time-left");

// feedback is used to give feedback to player
var feedback = document.getElementById("feedback");

// called html id to store high scores local storage
var highScores = document.getElementById("high-scores");

// button that clears high scores 
var erase = document.querySelector("#clear");

// timer is set at 100 seconds and will decrease from there 
var timeSet = 100;

// questionBox is created to utilized to place questions in it
var questionBox = document.getElementById("question-box");

// want form to show when game is over
// var gameOver = document.querySelector(".container");

// set currentQuestion to 0 so it always changes questions on its own when function is called
var currentQuestion = 0;

// userScore is set to 0, so it can increase or decrease as time goes on
var userScore = 0;


var questions = [
    // this is an array that stores my questions, possible answers, and the correct answers
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


// Function will decrease timer 
function decrementClock() {
    // timeSet decrement the value
    if (timeSet === 0) {
        // function end game

        endGame();
    }
    timeSet--;
    quizTimer.textContent = timeSet;
}

function endGame() {
    // create conditional to stop when question index is at the end
    // submit form for people to place their initials and score is automatically inputed
    // send submitted form to local storage in highScores 
    console.log(endGame);

    console.log(gameOver);

    // Create a local storage for high scores 
    localStorage.setItem("High Scores", userScore);
    console.log(highScores);

    // Created an event listener to clear scores 
    erase.addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

    var highScorez = localStorage.getItem("High Scores");
    console.log(highScorez);
    highScores.innerHTML = highScorez;

    // if (highScorez !== null) {

    //     for (var i = 0; i < highScorez.length; i++) {

    //         var createLi = document.createElement("li");
    //         createLi.textContent = highScorez[i].initials + " " + highScorez[i].score;
    //         highScorez.appendChild(createLi);
    //     }
    // }
}

function startQuiz() {

    // can get rid of coding quiz header
    first.classList.add("hide");
    // start the timer 
    quizTimer.textContent = timeSet;

    // set interval to the decrement clock function
    setInterval(decrementClock, 1000);

    // call function getQuestion to run it in startQuiz
    getQuestion();

    // container.add("hide");

}

// this functions grabs the questions
function getQuestion() {

    // populate the question-box with question 
    questionBox.innerHTML = `
        <h3>${questions[currentQuestion].title}</h3>
    `
    // back ticks (above) are used to insert html into js file quickly 

    // (below) add answers to box and wrap with button
    // created a for loop to continually re-populate the questions
    for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        // create a var for a button 
        var btn = document.createElement("button");
        // places answers inside button
        // button targets innerText to get to currentQuestion to get to the answers index
        btn.innerText = questions[currentQuestion].answers[i];
        // created event listener to button and called checkAnswer
        btn.addEventListener("click", checkAnswer)

        // questionBox is appended to button, which is connected to inner text... answers!
        questionBox.append(btn);
    }
}




// end quiz with conditions when questions run out with new div in html 


// This function checks if the answer is correct or not
function checkAnswer(event) {

    event.preventDefault();

    console.log();

    if (event.target.innerText === questions[currentQuestion].correctAnswer) {
        // feedback shows if answer is correct
        feedback.innerHTML = "Correct!";
        feedback.style.color = "green";
        console.log("Yay");
        userScore++;
    }
    else {
        // feedback shows if answer is incorrect 
        feedback.innerHTML = "Incorrect!";
        feedback.style.color = "red";
        console.log("Boo");
        timeSet = timeSet - 10;
    }

    currentQuestion++;
    getQuestion();
}

// Event Listeners

// start button will trigger start quiz
startButton.addEventListener("click", startQuiz);




// pseudo code by Jess: 
// when time is 0, quiz is over
// use last week's activities, especially activity 19! use event listener 