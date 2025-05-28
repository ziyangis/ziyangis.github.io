
var sweetScore = 0;
var saltyScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//add event listeners to buttons

q1a1.addEventListener("click", salty);
q1a2.addEventListener("click", sweet);

q2a1.addEventListener("click", sweet);
q2a2.addEventListener("click", salty);

q3a1.addEventListener("click", sweet);
q3a2.addEventListener("click", salty);

q4a1.addEventListener("click", salty);
q4a2.addEventListener("click", sweet);

q5a1.addEventListener("click", salty);
q5a2.addEventListener("click", sweet);

restart.addEventListener("click", restartResult);

//functions
if (questionCount == 5) {
  console.log("The quiz is done!");
}

function salty() {
  saltyScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " saltyScore = " + saltyScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");
    updateResult();
  }

}



function sweet() {
  sweetScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " sweetScore = " + sweetScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if (saltyScore >= 3) {
    result.innerHTML = "You are salty!";
    console.log("You are salty!");

  } else if(sweetScore >= 3) 
  {result.innerHTML = "You are sweet!";
    console.log("You are sweet!");
  }
}

function restartResult()
{
  result.innerHTML = "Your result is...";
  sweetScore = 0;
  saltyScore = 0;
  questionCount = 0;
}

