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


var questionLoop = function(answerChoice) {
for (var i = 0; i <= (question.length - 1); i++) {
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
aEl.addEventListener("click", questionLoop(aEl.textContent));
bEl.addEventListener("click", questionLoop(bEl.textContent));
cEl.addEventListener("click", questionLoop(cEl.textContent));
dEl.addEventListener("click", questionLoop(dEl.textContent));

