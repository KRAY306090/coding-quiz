var startButtonEl = document.getElementById("start-btn");
var questionIndex = 0;
var score = 0;
attemptCounter = 0;
var leaderBoxEl = document.getElementById("leaderBox");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("question-text");
var choiceOneEl = document.getElementById("choice-one");
var choiceTwoEl = document.getElementById("choice-two");
var choiceThreeEl = document.getElementById("choice-three");
var choiceFourEl = document.getElementById("choice-four");
var questions = [{question: "What does JSON stand for?", a: "Derulo???", b: "JavaScript Object Notation", c: "JavaScript Only Nodes", d: "Java Source Oriented Node", correct: "b"},
                {question: "Question 2?", a: "a", b: "b", c: "c", d: "a", correct: "a"},
                {question: "Question 3?", a: "a", b: "b", c: "c", d: "b", correct: "b"},
                {question: "Question 4?", a: "a", b: "b", c: "c", d: "c", correct: "c"},
                {question: "Question 5?", a: "a", b: "b", c: "c", d: "d", correct: "d"}
];
var submitName = function() {
    // change to leader board
    document.getElementById("highScore").style.display = "none";
    document.getElementById("leader").style.display = "block";
    var nickName = document.getElementById("nickname").value;
    leaderBoxEl.innerHTML  = "<p>" + nickName + ":   " + score + "</p>";
    
}
var startTimer = function(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};
var endGame = function() {
    document.getElementById("page-content").style.display = "none";
    document.getElementById("highScore").style.display = "block";
    console.log(score);
    scoreEl.innerText = score;


}
var questionValidator = function(answerChoice) {
    document.getElementById("right").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    if (answerChoice === questions[questionIndex].correct) {
        //1. add to score//2. make correct appear
        document.getElementById("right").style.display = "block";
        console.log("correct");
        score++;
    }
    else {
    //make wrong apper
    document.getElementById("wrong").style.display = "block";
    console.log("wrong");
    } 
    //add 1 to iterations of the array
    questionIndex++;
    nextQuestion();
    };    
var startQuiz = function() {
    //make start screen dissapear
    document.getElementById("leader").style.display = "none";
    document.getElementById("highScore").style.display = "none";
    score = 0;
    console.log("quiz started");
    document.getElementById("start").style.display = "none";
    document.getElementById("page-content").style.display = "block";
    nextQuestion();
    
};
var nextQuestion = function() {
    //put the content into boxes based on the iteration of the array received if it is less than the array length
    if (questionIndex < questions.length) {
        questionEl.innerText = questions[questionIndex].question;
        choiceOneEl.innerText = questions[questionIndex].a;
        choiceTwoEl.innerText = questions[questionIndex].b;
        choiceThreeEl.innerText = questions[questionIndex].c;
        choiceFourEl.innerText = questions[questionIndex].d;
    }
    //if greater than length of array then it will call the end game function
    else {
        endGame();
    }

};

startButtonEl.addEventListener("click", startQuiz);

