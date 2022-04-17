// I need to create an object of questions and the answers an array within the object to easily access data
var questions = [
    
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
var answerOptions = document.querySelector('#answerOptions');
var timerEl = document.querySelector('#timer');


//Variables for buttons
var start = document.querySelector('#start');
var restart = document.querySelector('#restart');
var addHigh = document.querySelector('addHighScore');
var buttonA = document.querySelector('#a');
var buttonB = document.querySelector('#b');
var buttonC = document.querySelector('#c');
var buttonD = document.querySelector('#d');

//Other Variables
var timer;
var timerCount;
// to keep track of question number
var questionNumber = 0;
// Too keep track of score
var score = 0;
// to keep track of how much time is left
var timeLeft = 0;


//need to create a function to start the quiz 
function startQuiz() {
    start.addEventListener("click", function() {
       
        timerCount = 60;

        buttonAppear();
        displayQuestions(questionNumber);
        timer();
    })

}
//this function is for buttons choices to appear once quiz has initiated 
function buttonAppear() {
    answerOptions.style.visibility = "visible";
}

//I want this function to display questions on page for user to see
function displayQuestions(questionNum) {
     

     questionOptions.textContent = questions[questionNum].question;
     buttonA.textContent = "A. " + questions[questionNum].answers.a;
     buttonB.textContent = "B. " + questions[questionNum].answers.b;
     buttonC.textContent = "C. " + questions[questionNum].answers.c;
     buttonD.textContent = "D. " + questions[questionNum].answers.d;
 }



//I want this function to start the timer
function timer() {
    timerCount = 60;
    timer = setInterval(function() {
        
        timerCount--;
        timerEl.textContent = "Time:" + timerCount;
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            }

    } , 1000)
}


// This will be to reset the game
function resetGame() {
  restart.addEventListener("click", function() {
      clearInterval(timer)
      score = 0;
      questionNumber = 0;
      timeLeft = 0;
      timer = null;
      timerEl.textContent = timeLeft;
  })
}



// function resetHighScores() {}



//this function increases the time by 10 seconds when a question is answered correctly
function correctAnswer() {
    timeLeft += 10;
    nextQuestion();
}

//this function decreases the time by 10 seconds when a question is answered incorrectly
function WrongAnswer() {
   timeLeft -= 10;
   nextQuestion();
}

//this function will display next question
function nextQuestion() {

}


startQuiz();
resetGame();





//example of how parameters work
// function math(num1, num2, operation) {
//     if (operation === "+"){
//         return num1 + num2
//     } else if (operation === "-") {
//         return num1 - num2
//     }
// }