const calculatorOutput = document.getElementById("calculatorOutput");
const cleanInput = document.getElementById("cleanInput");
const positiveNegativeInput = document.getElementById("positiveNegativeInput");
const equalInput = document.getElementById("equalInput");
const numberInputs = document.querySelectorAll(".calculator__input-value--number");
const operatorInputs = document.querySelectorAll(".calculator__input-value--operator");

let bucket;
let operatorInputPressed = false;
let lastOperator;

calculatorOutput.addEventListener("change", () => {
})

cleanInput.addEventListener("click", () => {

  calculatorOutput.textContent = "0";

  if (operatorInputPressed) cleanInput.textContent = "C";
  else cleanInput.textContent = "AC";
})

positiveNegativeInput.addEventListener("click", () => {
  if (parseInt(calculatorOutput.textContent) > 0) calculatorOutput.textContent = "-" + calculatorOutput.textContent;
  else calculatorOutput.textContent = calculatorOutput.textContent.slice(1);
})

equalInput.addEventListener("click", () => {
  operate(lastOperator, bucket, calculatorOutput.textContent);
})

numberInputs.forEach(numberInput => {
  numberInput.addEventListener("click", () => {
    writeToOutput(numberInput.textContent);
  })
})

operatorInputs.forEach(operatorInput => {
  operatorInput.addEventListener("click", () => {
    bucket = calculatorOutput.textContent;
    operatorInputPressed = true;
    lastOperator = operatorInput.textContent;
  })
})

function writeToOutput(data) {
  if (operatorInputPressed || cleanInput.textContent === "AC") calculatorOutput.textContent = "";

  calculatorOutput.textContent += data;

  cleanInput.textContent = "C";

  operatorInputPressed = false;
}

function operate(operator, n1, n2) {
  console.log(operator, n1, n2);

  switch (operator) {
    case "/":
      let test = divide(n1, n2);
      writeToOutput(test);
      break;
    case "x":
      multiply(n1, n2);
      break;
    case "-":
      subtract(n1, n2);
      break;
    case "+":
      add(n1, n2);
      break;
    default:
      console.log("Congratulations! You managed to break the code");
  }
}

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}
