let currentInput = "0";
let operator = null;
let previousInput = null;
let shouldClearDisplay = false;

function inputDigit(digit) {
    if (shouldClearDisplay) {
        currentInput = digit.toString();
        shouldClearDisplay = false;
    } else if (currentInput === "0") {
        currentInput = digit.toString();
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function inputDot() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}

function clearEntry() {
    currentInput = "0";
    updateDisplay();
}

function clearAll() {
    currentInput = "0";
    previousInput = null;
    operator = null;
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function inputOperator(op) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = "";
    operator = op;
    shouldClearDisplay = false;
    updateDisplay(); // Show the operator pressed in the display
}

function calculate() {
    if (operator === null || previousInput === null) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
    shouldClearDisplay = true;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("result").value = currentInput || previousInput || "0";
}
