const calcOutput = document.querySelectorAll("[data-output]");
const numberInputs = document.querySelectorAll("[data-number]");
const operatorInputs = document.querySelectorAll("[data-operator]");
const helpersInputs = document.querySelectorAll("[data-helper]");
const equalInput = document.querySelectorAll("[data-equal]");

let state = {
  first: {
    param: "",
  },
  second: {
    param: "",
  },
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
    updateStateHelpers(helper.textContent);
    console.log("Helper pressed ", helper.textContent);
  })
});

equalInput.forEach(equal => {
  equal.addEventListener("click", () => {
    calculateState();

    console.log(state);
  });
})

function updateStateArgs(value) {
  if (!state.operator) {
    if (state.first.param === "0") state.first.param = "";
    if (!state.first.helper) {
      state.first.param += value;

      state.first.valid = true;
    } else if (!state.first.param.includes(state.first.helper)) {
      state.first.param += state.first.helper;
      state.first.helper = "";

      state.first.valid = false;
    } else {
      state.first.param += value;
      state.first.helper = "";

      state.first.valid = true;
    }

    if (!state.first.valid) {
      state.first.param = state.first.param + value;
      state.first.valid = true
    }

    writeToOutput(state.first.param);
  } else {
    if (state.second.param === "0") state.second.param = "";

    if (!state.second.helper) {
      state.second.valid = true;
      state.second.param += value;
    } else if (!state.second.param.includes(state.second.helper)) {
      state.second.param += state.second.helper;
      state.second.helper = "";

      state.second.valid = false;

    } else {
      state.second.param += value;
      state.second.helper = "";

      state.second.valid = true;
    }
    if (!state.second.valid) {
      state.second.param = state.second.param + value;
      state.second.valid = true
    }

    writeToOutput(state.second.param);
  }
}

function updateStateOperator(value) {
  if (state.first.param && state.first.valid) state.operator = value;
  state.first.helper = "";
  state.second.helper = "";
}

function updateStateHelpers(value) {
  state.second?.param ? state.second.helper = value : state.first.helper = value;

  switch (value) {
    case ".":
      if (state.first.helper) return;
      console.log(". status");
      break;
    case "+/-":
      if (state.first.helper) {
        if (state.first.param > 0) {
          state.first.param = "-" + state.first.param;

          writeToOutput(state.first.param);
        } else {
          state.first.param = state.first.param.replace("-", "");

          writeToOutput(state.first.param);

        }

        state.first.helper = "";
      } else {
        if (state.second.param > 0) {
          state.second.param = "-" + state.second.param;

          writeToOutput(state.second.param);

        } else {
          state.second.param = state.second.param.replace("-", "");

          writeToOutput(state.second.param);

        }

        state.second.helper = "";
      }

      break;

    case "AC":
      if (state.second.param) {
        state.second.param = "0";

        writeToOutput(state.second.param);
      } else {
        state.first.param = "0";
        state.operator = "";

        writeToOutput(state.first.param);

      }

      state.first.helper = "";
      state.second.helper = "";

      console.log("AC status");
      break;
  }
}

function calculateState() {
  switch (state.operator) {
    case "%":
      remainder(parseInt(state.first.param), parseInt(state.second.param));

      console.log(parseInt(state.first.param) % parseInt(state.second.param));
      break;
    case "/":
      divide(parseInt(state.first.param), parseInt(state.second.param));

      console.log(parseInt(state.first.param) / parseInt(state.second.param));
      break;
    case "x":
      multiply(parseInt(state.first.param), parseInt(state.second.param));

      console.log(parseInt(state.first.param) * parseInt(state.second.param));
      break;
    case "-":
      subtract(parseInt(state.first.param), parseInt(state.second.param));

      console.log(parseInt(state.first.param) - parseInt(state.second.param));
      break;
    case "+":
      add(parseInt(state.first.param), parseInt(state.second.param));

      console.log(parseInt(state.first.param) + parseInt(state.second.param));
      break;
  }
}

function add(n1, n2) {
  let result = n1 + n2;

  writeToOutput(result);
}

function subtract(n1, n2) {
  let result = n1 - n2;

  writeToOutput(result);
}

function multiply(n1, n2) {
  let result = n1 * n2;

  writeToOutput(result);
}

function divide(n1, n2) {
  let result = n1 / n2;

  writeToOutput(result);
}

function remainder(n1, n2) {
  let result = n1 % n2;

  writeToOutput(result);
}

function writeToOutput(value) {
  calcOutput.forEach(display => {
    display.textContent = value;
  })
}
