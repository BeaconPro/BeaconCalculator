// script.js
let currentInput = "";

function appendValue(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    document.getElementById("display").value = currentInput;
  }
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculatePercentage() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    document.getElementById("display").value = currentInput;
  }
}

function calculateResult() {
  try {
    // Replace ^ with ** for exponentiation
    let expression = currentInput.replace(/\^/g, '**');
    // SECURITY RISK: Using eval() can be dangerous with user-provided input.
    currentInput = eval(expression).toString();
    document.getElementById("display").value = currentInput;
  } catch (e) {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}

function compareGreater() {
  let values = currentInput.split('>');
  if (values.length === 2) {
    let left = parseFloat(values[0]);
    let right = parseFloat(values[1]);
    document.getElementById("display").value = left > right ? "True" : "False";
  } else {
    currentInput += '>';
    document.getElementById("display").value = currentInput;
  }
}

function compareLess() {
  let values = currentInput.split('<');
  if (values.length === 2) {
    let left = parseFloat(values[0]);
    let right = parseFloat(values[1]);
    document.getElementById("display").value = left < right ? "True" : "False";
  } else {
    currentInput += '<';
    document.getElementById("display").value = currentInput;
  }
}
