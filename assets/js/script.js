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
                {question: "What way can you properly declare a new function?", a: "var mouse = function() {}", b: "function mouse() {}", c: "neither", d: "A and B", correct: "d"},
                {question: "Who invented Javascript?", a: "Brendan Eich", b: "John Resig", c: "Bill Gates", d: "Niklaus Wirth", correct: "a"},
                {question: "How would you say that two values are equivalent to eachother?", a: "+=", b: "=", c: "==", d: "===", correct: "d"},
                {question: "Is JavaScript the same as Java?", a: "YES", b: "NO NO NO", c: "sometimes", d: "Coffee?", correct: "b"}
];
var submitName = function() {
    // change to leader board
    document.getElementById("highScore").style.display = "none";
    document.getElementById("leader").style.display = "block";
    var nickName = document.getElementById("nickname").value;
    leaderBoxEl.innerHTML  = "<p>" + nickName + ":   " + score + "</p>";
}
var count = 30;
function countDown(){
var timer = document.getElementById("timer");
if(count > 0){
    count--;
    timer.innerHTML = "You have "+count+" seconds to finish.";
    setTimeout("countDown()", 1000);
}
else{
    endGame();
}
}
var endGame = function() {
    document.getElementById("page-content").style.display = "none";
    document.getElementById("highScore").style.display = "block";
    console.log(score);
    scoreEl.innerText = score;
    count = 0;
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
    console.log("quiz started");
    document.getElementById("start").style.display = "none";
    document.getElementById("page-content").style.display = "block";
    countDown();
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
var reset = function() {
    document.getElementById("leader").style.display = "none";
    document.getElementById("highScore").style.display = "none";
    score = 0;
    questionIndex = 0;
    document.getElementById("start").style.display = "block";
    count = 30;
}
startButtonEl.addEventListener("click", startQuiz);

