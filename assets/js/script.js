var startButtonEl = document.getElementById("start-btn");
var pageContentEl = document.querySelector("#page-content");
var questionEl = document.getElementById("question-text");

var aEl = document.getElementById("choice-one");
var bEl = document.getElementById("choice-two");
var cEl = document.getElementById("choice-three");
var dEl = document.getElementById("choice-four");
var question = [{q: "What does JSON stand for?",a: "Derulo???", b: "JavaScript Object Notation", c: "JavaScript Only Nodes", d: "Java Source Oriented Node", correct: "JavaScript Object Notation"},
                {q: "Question 2!", a: "a", b: "b", c: "c", d: "d", correct: "a"},
                {q: "Question 3!", a: "a", b: "b", c: "c", d: "d", correct: "b"},
                {q: "Question 4!", a: "a", b: "b", c: "c", d: "d", correct: "c"},
                {q: "Question 5!", a: "a", b: "b", c: "c", d: "d", correct: "d"}
];
 var startQuiz = function(event) {
     //upon click of sart button:
     //timer starts counting down
     //start screen is switched to no display
     //question screen is displayed
     //game listens for button clicks
 }

var questionLoop = function(answerChoice) {
for (var i = 1; i <= (question.length - 1); i++) {
    questionEl.textContent = question[i].q;
    aEl.textContent = question[i].a;
    bEl.textContent = question[i].b;
    cEl.textContent = question[i].c;
    dEl.textContent = question[i].d;


    
    if (answerChoice === question[i].correct) {
        console.log("Correct");
    }
    else {
        console.log("Incorrect");
    }

    
}
};
var buttonHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches("choice-one")) {
      var answerChoice = document.getElementById("choice-one").textContent;
      questionLoop(answerChoice);
    }

    else if (event.target.matches("choice-two")) {
      var answerChoice = document.getElementById("choice-two").textContent;
      questionLoop(answerChoice);
    }
    else if (event.target.matches("choice-three")) {
        var answerChoice = document.getElementById("choice-three").textContent;
        questionLoop(answerChoice);
      }
    else if(event.target.matches("choice-four")) {
        var answerChoice = document.getElementById("choice-four").textContent;
        questionLoop(answerChoice);
    }
};
startButtonEl.addEventListener("click", startQuiz);



