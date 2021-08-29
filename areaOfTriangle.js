const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateArea = document.querySelector("#cal-btn");
const output = document.querySelector("#output");

function calculateTheArea() {

  const baseValue = Number(base.value);
  const heightValue = Number(height.value);
  const area = (0.5*(baseValue*heightValue));
  output.innerText = "Area of the triangle is " + area + " units";

  
}

calculateArea.addEventListener("click", calculateTheArea);