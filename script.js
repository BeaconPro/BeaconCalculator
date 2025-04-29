// script.js
let currentInput = "";

function appendValue(value) {
  // Add value to the input
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function appendDecimal() {
  // Add a decimal point only if there's no decimal already
  if (!currentInput.includes(".")) {
    currentInput += ".";
    document.getElementById("display").value = currentInput;
  }
}

function clearDisplay() {
  // Clear the current input
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculatePercentage() {
  // Calculate the percentage of the current input
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    document.getElementById("display").value = currentInput;
  }
}

function calculateResult() {
  try {
    // Calculate the result of the current input
    currentInput = eval(currentInput).toString();
    document.getElementById("display").value = currentInput;
  } catch (e) {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}

function compareGreater() {
  // Check if the first number is greater than the second number
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
  // Check if the first number is less than the second number
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
function calculateResult() {
  try {
    // Replace ^ with ** for exponentiation
    let expression = currentInput.replace(/\^/g, '**');
    currentInput = eval(expression).toString();
    document.getElementById("display").value = currentInput;
  } catch (e) {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}
