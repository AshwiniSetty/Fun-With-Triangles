const sideInput = document.querySelectorAll(".side-input");
const calculateHypButton = document.querySelector("#hyp-btn");
const output = document.querySelector("#output");

function calculateSumOfSquare(sidea, sideb){
    const sumOfSquares = sidea*sidea + sideb*sideb;
    return sumOfSquares;

}


function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquare(
        Number(sideInput[0].value),
        Number(sideInput[1].value)
        );
    const hypotenuseLength = Math.sqrt(sumOfSquares);
    output.innerText = "The length of hypotenuse is " + hypotenuseLength;
}


calculateHypButton.addEventListener("click", calculateHypotenuse)