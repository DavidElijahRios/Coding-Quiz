// I need to create an object of questions and the answers an array within the object to easily access data
questions = [
    
    {
        question: "What does HTML stand for?",
        answers: {
            a: 'Hyper Text Main Language',
            b: 'Hover Technology Monitor Language',
            c: 'Hyper Text Markup Language',
            d: 'Hover Text Machine Language'
        },
        correctAnswer: 'c'
    },
    {
        question: "what syntax is used to make a comment in JavaScript?",
        answers: {
            a: '<!-- -->',
            b: '//',
            c: '/**/',
            d: 'None of the above'
        },
        correctAnswer: 'b'
    },
    {
        question: "What does API Stand for?",
        answers: {
            a: 'Apes playing Instruments',
            b: 'Application Planning Intel',
            c: 'Adjusting Programming Interface',
            d: 'Application Programing Interface'
        },
        correctAnswer: 'd'
    },
    {
        question: "What does CSS Stand for?",
        answers: {
            a: 'Cascading Style Sheet',
            b: 'Central Styling Sheet',
            c: 'Cascading Style Syntax',
            d: 'Color Style Sheet'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is used for HTML comment?",
        answers: {
            a: '//',
            b: '/**/',
            c: '<!-- -->',
            d: 'None of the above'
        },
        correctAnswer: 'c'
    },
    {
        question: "What does JS stand for?",
        answers: {
            a: 'Just Saying',
            b: 'JavaScript',
            c: 'JustinSelena',
            d: 'JavaSyntax'
        },
        correctAnswer: 'b'
    },
];

// Variables to be used for adding content on HTML page
var quizContainer = document.querySelector('#quiz-container');
var questionOptions = document.querySelector('#questions');
var answerOptions = document.querySelector('#answerChoices');
var timerEl = document.querySelector('#timer');

//Variables for buttons
var start = document.querySelector('#start');
var restart = document.querySelector('#restart');
var addHigh = document.querySelector('addHighScore');

//Other Variables
var chosenQuestion = "";
var createUl = document.createElement("ul");
var timer;
var timerCount;
var isWin = false;




//need to create a function to start the quiz 
function startQuiz() {
    start.addEventListener("click", function() {
       
        isWin = false;
        timerCount = 60;
        for(let i = 0; i < questions.length; i++)
        questionOptions.textContent = questions[i];
        console.log(questions.question)
    })
    timer();
}
startQuiz();
//I want this function to display questions on page for user to see
// function displayQuestions() {
//      chosenQuestion = questions[Math.floor(Math.random() * questions.length)]
//  }



// // I want this function to display answer choices on the page for user to select
// function displayAnsChoices() {
// }



// //I want this function to start the timer
function timer() {
    timer = setInterval(function() {
        timerCount = 60;
        timerCount--;
        timerEl.textContent = "Time:" + timerCount;
        if (timerCount >= 0) {
          // Tests if win condition is met
          if (isWin && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
        }
    } 
        // Tests if time has run out
        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          
        }
    }, 1000)
}



// //I want this function to restart game which restart everything
// function resetGame() {

// }

// // function to reset high scores to 0
// function resetHighScores() {}
