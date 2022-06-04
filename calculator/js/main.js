const calcOutput = document.querySelectorAll("[data-output]");
const numberInputs = document.querySelectorAll("[data-number]");
const operatorInputs = document.querySelectorAll("[data-operator]");
const helpersInputs = document.querySelectorAll("[data-helper]");
const equalInput = document.querySelectorAll("[data-equal]");

let ACStatus;
let state = {
  first: {
    param: "", helper: "", isValid: false,
  }, operator: "", second: {
    param: "", helper: "", isValid: false,
  }, result: "", cleanFormula: true,
};

numberInputs.forEach(number => {
  number.addEventListener("click", () => {
    updateParam(number.textContent);
  })
});

operatorInputs.forEach(operator => {
  operator.addEventListener("click", () => {
    updateOperator(operator.textContent);
  })
});

helpersInputs.forEach(helper => {
  if (helper.textContent === "AC") ACStatus = helper;
  helper.addEventListener("click", () => {
    switchHelpers(helper);
  })
});

equalInput.forEach(equal => {
  equal.addEventListener("click", () => {
    calculateState();
  });
})

function updateParam(value) {
  ACStatus.textContent = "C";
  // Update params with helper if it has one
  if (state.result) {
    state.second.param = "";
    state.result = "";
  }
  if (state.operator) {
    if (state.second.param.length > 8) return;
    if (state.second.param === "0") state.second.param = "";

    state.second.param += state.second.helper + value;

    writeToOutput(state.second.param);
  } else {
    if (state.first.param.length > 8) return;
    if (state.first.param === "0") state.first.param = "";

    state.first.param += state.first.helper + value;

    writeToOutput(state.first.param);
  }

  checkValid();
}

function updateOperator(value) {
  // Continue to calc after you get the first result
  if (state.result && state.cleanFormula) state.first.param = state.result

  state.operator = value;
}

function switchHelpers(value) {
  switch (value.textContent) {
    case "AC":
    case "C":
      ACCase();
      break;
    case "+/-":
      PosNegCase();
      break;
    case ".":
      dotCase(value.textContent);
      break;
  }
}

function ACCase() {
  if (state.second.param === "0") {
    state.first.param = "0";
    state.operator = ""
    state.second.param = "0";
    state.result = "";
    state.cleanFormula = true;

    ACStatus.textContent = "AC";
  }

  if (state.operator) {
    state.second.param = "0";
    writeToOutput(state.second.param);

    ACStatus.textContent = "AC";
  } else {
    state.first.param = "0";
    writeToOutput(state.first.param);

    ACStatus.textContent = "AC";
  }
}

function PosNegCase() {
  if (state.operator && state.result && state.first.param > 0) {
    state.first.param = "-" + state.first.param;
    state.cleanFormula = false;

    writeToOutput(state.first.param);
    return;
  } else if (state.operator && state.result && state.first.param < 0) {
    state.first.param = state.first.param.replace("-", "");
    state.cleanFormula = false;

    writeToOutput(state.first.param);
    return;
  }

  if (state.operator && state.second.param > 0) {
    state.second.param = "-" + state.second.param;
    writeToOutput(state.second.param);
  } else if (state.operator && state.second.param < 0) {
    state.second.param = state.second.param.replace("-", "");
    writeToOutput(state.second.param);
  }

  if (!state.operator && state.first.param > 0) {
    state.first.param = "-" + state.first.param;
    writeToOutput(state.first.param);
  } else if (!state.operator && state.first.param < 0) {
    state.first.param = state.first.param.replace("-", "");
    writeToOutput(state.first.param);
  }
}

function dotCase(value) {
  if (state.operator) state.second.helper = value; else state.first.helper = value;

  if (state.first.param.includes(".")) {
    state.first.helper = "";
  }
  if (state.second.param.includes(".")) {
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
  state.result = (n1 % n2).toString();

  writeToOutput(state.result);

  state.first.param = state.result;
}

function writeToOutput(value) {
  calcOutput.forEach(display => {
    display.textContent = value;
  })
}

// TODO: Implement checkValid() for cases like e.g. `9999. + .34`
// TODO: Design improvements for long numbers
