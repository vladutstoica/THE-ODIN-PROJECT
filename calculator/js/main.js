const calcOutput = document.querySelectorAll("[data-output]");
const numberInputs = document.querySelectorAll("[data-number]");
const operatorInputs = document.querySelectorAll("[data-operator]");
const helpersInputs = document.querySelectorAll("[data-helper]");
const equalInput = document.querySelectorAll("[data-equal]");

let state = {
  first: {
    param: "", helper: "", isValid: false,
  },
  operator: "",
  second: {
    param: "", helper: "", isValid: false,
  },
  ACStatus: "AC",
  result: "",
};

numberInputs.forEach(number => {
  number.addEventListener("click", () => {
    console.log("Number pressed ", number.textContent);
    updateParam(number.textContent);
  })
});

operatorInputs.forEach(operator => {
  operator.addEventListener("click", () => {
    console.log("Operator pressed ", operator.textContent);
    updateOperator(operator.textContent);
  })
});

helpersInputs.forEach(helper => {
  helper.addEventListener("click", () => {
    console.log("Helper pressed ", helper.textContent);
    switchHelpers(helper);
  })
});

equalInput.forEach(equal => {
  equal.addEventListener("click", () => {
    calculateState();

    console.log(state);
  });
})

function updateParam(value) {
  // Update params with helper if it has one
  if (state.result) {
    state.second.param = "";
    state.result = "";
  }
  if (state.operator) {
    if (state.second.param === "0") state.second.param = ""
    state.second.param += state.second.helper + value;

    writeToOutput(state.second.param);
  } else {
    if (state.first.param === "0") state.first.param = ""
    state.first.param += state.first.helper + value;

    writeToOutput(state.first.param);
  }

  checkValid();


  console.log(state.first, state.second);
}

function updateOperator(value) {
  if (state.result) state.first.param = state.result

  state.operator = value;
}

function switchHelpers(value) {
  switch (value.textContent) {
    case "AC":
      ACCase(value.textContent);
      console.log(value);
      break;
    case "+/-":
      PosNegCase();
      console.log(value);
      break;
    case ".":
      dotCase(value);
      break;
  }
}

function ACCase(value) {
  if (state.second.param === "0") {
    state.first.param = "0";
    state.operator = ""
    state.second.param = "0";

    // TODO Make AC change to C
    value.textContent = "AC";
  }

  if (state.operator) {
    state.second.param = "0";
    writeToOutput(state.second.param);
  } else {
    state.first.param = "0";
    writeToOutput(state.first.param);
  }
}

function PosNegCase() {
  if (state.operator)
    if (state.second.param >= 0 )
      state.second.param = "-" + state.second.param;
}

function dotCase(value) {
  if (state.operator) state.second.helper = value; else state.first.helper = value;

  if (state.first.param.includes(".") || state.second.param.includes(".")) {
    state.first.helper = "";
    state.second.helper = "";
  }

  // Add helper to the param
  if (state.operator) {
    state.second.param += state.second.helper;

    writeToOutput(state.second.param);
    checkValid();
  } else {
    state.first.param += state.first.helper;

    writeToOutput(state.first.param);
    checkValid();
  }

  // Delete helper after it was inserted in param
  if (state.first.helper || state.second.helper) {
    state.first.helper = "";
    state.second.helper = "";
  }
}

function checkValid() {
  state.first.isValid = !(state.first.param.startsWith(".") || state.first.param.endsWith("."));
  state.second.isValid = !(state.second.param.startsWith(".") || state.second.param.endsWith("."));

  state.first.isValid = !(state.first.param === "");
  state.second.isValid = !(state.second.param === "");
}

function calculateState() {
  switch (state.operator) {
    case "%":
      remainder(parseFloat(state.first.param), parseFloat(state.second.param));
      break;
    case "/":
      divide(parseFloat(state.first.param), parseFloat(state.second.param));
      break;
    case "x":
      multiply(parseFloat(state.first.param), parseFloat(state.second.param));
      break;
    case "-":
      subtract(parseFloat(state.first.param), parseFloat(state.second.param));
      break;
    case "+":
      add(parseFloat(state.first.param), parseFloat(state.second.param));
      break;
  }
}

function add(n1, n2) {
  state.result = (n1 + n2).toString();

  writeToOutput(state.result);

  state.first.param = state.result;
}

function subtract(n1, n2) {
  state.result = (n1 - n2).toString();

  writeToOutput(state.result);

  state.first.param = state.result;
}

function multiply(n1, n2) {
  state.result = (n1 * n2).toString();

  writeToOutput(state.result);

  state.first.param = state.result;
}

function divide(n1, n2) {
  state.result = (n1 / n2).toString();

  writeToOutput(state.result);

  state.first.param = state.result;
}

function remainder(n1, n2) {
  state.result = n1 % n2;

  writeToOutput(state.result);

  state.first.param = state.result;
}

function writeToOutput(value) {
  calcOutput.forEach(display => {
    display.textContent = value;
  })
}
