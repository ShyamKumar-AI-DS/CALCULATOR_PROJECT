let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(currentInput);
    currentInput = '0';
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function calculate() {
    let result;
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}
