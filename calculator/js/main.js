const calculatorOutput = document.getElementById("calculatorOutput");
const cleanInput = document.getElementById("cleanInput");
const positiveNegativeInput = document.getElementById("positiveNegativeInput");
const equalInput = document.getElementById("equalInput");

const numberInputs = document.querySelectorAll("[data-number]");
const operatorInputs = document.querySelectorAll("[data-operator]");
const helpersInputs = document.querySelectorAll("[data-helper]");

let state = {
  first: {
    param: "",
  },
  second: {
    param: "",
  }
};

numberInputs.forEach(number => {
  number.addEventListener("click", () => {
    console.log("Number pressed ", number.textContent);
    updateStateArgs(number.textContent);
  })
});

operatorInputs.forEach(operator => {
  operator.addEventListener("click", () => {
    console.log("Operator pressed ", operator.textContent);
    updateStateOperator(operator.textContent);
  })
});

helpersInputs.forEach(helper => {
  helper.addEventListener("click", () => {
    if (state.first.helper) return;
    updateStateHelpers(helper.textContent);
    console.log("Helper pressed ", helper.textContent);
  })
});

equalInput.addEventListener("click", () => {
  console.log(state);
});

function updateStateArgs(value) {
  if (!state.operator) {
    if (!state.first.helper) {
      state.first.param += value;

      state.first.valid = true;
    } else if (!state.first.param.includes(state.first.helper)) {
      state.first.param += state.first.helper;
      state.first.valid = false;
    } else {
      state.first.param += value;

      state.first.valid = true;
    }

    if (!state.first.valid) {
      state.first.param = state.first.param + value;
      state.first.valid = true
    }
  } else {
    if (!state.second.helper) {
      state.second.valid = true;
      state.second.param += value;
    } else if (!state.second.param.includes(state.second.helper)) {
      state.second.param += state.second.helper;
      state.second.valid = false;
    } else {
      state.second.param += value;
      state.second.valid = true;
    }
    if (!state.second.valid) {
      state.second.param = state.second.param + value;
      state.second.valid = true
    }
  }
}

function updateStateOperator(value) {
  if (state.first.param && state.first.valid) state.operator = value;
  state.first.helper = "";
}

function updateStateHelpers(value) {
  state.second?.param ? state.second.helper = value : state.first.helper = value;
}
























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let bucket;
// let operatorInputPressed = false;
// let lastOperator;
// let state = {};
// calculatorOutput.addEventListener("change", () => {
// })
//
// cleanInput.addEventListener("click", () => {
//
//   if (cleanInput.textContent === "C") {
//     calculatorOutput.textContent = "0";
//     lastOperator.focus();
//     cleanInput.textContent = "AC";
//   } else {
//     calculatorOutput.textContent = "0";
//     bucket = "0";
//   }
// })
//
// positiveNegativeInput.addEventListener("click", () => {
//   if (parseInt(calculatorOutput.textContent) > 0) calculatorOutput.textContent = "-" + calculatorOutput.textContent;
//   else calculatorOutput.textContent = calculatorOutput.textContent.slice(1);
// })
//
// equalInput.addEventListener("click", () => {
//   operate(lastOperator, parseInt(bucket), parseInt(calculatorOutput.textContent));
//
//   state = {};
//   operatorInputPressed = false;
// })
//
// numberInputs.forEach(numberInput => {
//   numberInput.addEventListener("click", () => {
//     writeToOutput(numberInput.textContent);
//     if (state?.operator) {
//       state.secondValue = numberInput.textContent;
//       console.log(state.secondValue);
//     }
//   })
// })
//
// operatorInputs.forEach(operatorInput => {
//   operatorInput.addEventListener("click", () => {
//     state.operator = operatorInput.textContent;
//     if (operatorInputPressed) operate(lastOperator, parseInt(bucket), parseInt(calculatorOutput.textContent));
//     bucket = calculatorOutput.textContent;
//     operatorInputPressed = true;
//     lastOperator = operatorInput.textContent;
//   })
// })
//
// function writeToOutput(data) {
//   if (operatorInputPressed || cleanInput.textContent === "AC") calculatorOutput.textContent = "";
//
//   calculatorOutput.textContent += data;
//   console.log(data);
//
//   cleanInput.textContent = "C";
// }
//
// function operate(operator, n1, n2) {
//   console.log(n1, operator, n2);
//
//   calculatorOutput.textContent = "";
//
//   switch (operator) {
//     case "/":
//       divide(n1, n2);
//       break;
//     case "x":
//       multiply(n1, n2);
//       break;
//     case "-":
//       subtract(n1, n2);
//       break;
//     case "+":
//       add(n1, n2);
//       break;
//     default:
//       console.log("Congratulations! You managed to break the code");
//   }
// }
//
// function add(n1, n2) {
//   let result = n1 + n2;
//
//   writeToOutput(result);
// }
//
// function subtract(n1, n2) {
//   let result = n1 - n2;
//
//   writeToOutput(result);
// }
//
// function multiply(n1, n2) {
//   let result = n1 * n2;
//
//   writeToOutput(result);
// }
//
// function divide(n1, n2) {
//   let result = n1 / n2;
//
//   writeToOutput(result);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
