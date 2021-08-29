const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const rightAnswers = ["60°" , "right angled", "isosceles", "equilateral", "scalene", "180°", "Equal", "Altitude", "Medians", "Perimeter"];


function calculateScore(){
    const userAnswers = new FormData(quizForm);
    var score=0;
    var index=0;
    for (let value of userAnswers.values()) {
        if (value === rightAnswers[index]) {
          score = score + 1;
        }
        index = index + 1;
     }
     output.innerText = "Your score is " + score;
}



submitButton.addEventListener("click",calculateScore);

