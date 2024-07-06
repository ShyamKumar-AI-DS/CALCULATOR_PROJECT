# Index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="background-image: url('BG.jpg');">
    
    <div class="calculator">
        <h1 style="text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 200%; color: aliceblue;">Calculator</h1>
        <input type="text" id="display" disabled>
        <div class="keys">
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="appendOperator('+')">+</button>
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="appendOperator('-')">-</button>
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="appendOperator('*')">*</button>
            <button onclick="appendNumber('0')">0</button>
            <button onclick="clearDisplay()">C</button>
            <button onclick="calculate()">=</button>
            <button onclick="appendOperator('/')">/</button>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>
```
# Style.css
```
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.calculator {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
}

.calculator #display {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1.5rem;
}

.calculator .keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.calculator .keys button {
    padding: 10px;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    cursor: pointer;
}

.calculator .keys button:hover {
    background-color: #e0e0e0;
}

```
# Main.js
```
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

```
# OUTPUT :
![JS CALC PROJECT](https://github.com/ShyamKumar-AI-DS/CALCULATOR_PROJECT/assets/93427182/a6b0494d-750c-4ac0-8921-7a82d3af1d07)
