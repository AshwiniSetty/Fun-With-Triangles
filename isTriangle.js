const inputAngles = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sum = angle1 + angle2 + angle3;
    return sum;
}


function isTriangle(){
    const sum = calculateSumOfAngles(
        Number(inputAngles[0].value),
        Number(inputAngles[1].value),
        Number(inputAngles[2].value)
    );
    if(sum === 180){
        output.innerText = "Yes! It is a triangle";
    }
    else{
        output.innerText = "No! It is not a triangle";
    }
}

isTriangleBtn.addEventListener('click', isTriangle)