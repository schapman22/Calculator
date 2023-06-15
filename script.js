let num1;
let operator;
let num2;
let digits = [];
const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.calc-button.digit-button');
const operatorButtons = document.querySelectorAll('.calc-button.operator-button');
const clearButton = document.getElementById('clear');
const backButton = document.getElementById('back');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');

window.addEventListener('load', function() {
    digitButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        let digit = button.innerText;
        digits.push(digit);
        if (!operator) {
          num1 = parseFloat(digits.join(''));
          display.value = num1;
        } else {
          num2 = parseFloat(digits.join(''));
          display.value = num1 + ' ' + operator + ' ' + num2;
        }
      });
    });
  
    operatorButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        operator = button.innerText;
        digits = [];
        display.value = num1 + ' ' + operator;
      });
    });
  

  clearButton.addEventListener('click', function() {
    digits = [];
    operator = null;
    display.value = '0';
  });

  backButton.addEventListener('click', function() {
    digits.pop();
    display.value = digits.join('');
  });

  decimalButton.addEventListener('click', function() {
    if (!digits.includes('.')) {
      digits.push('.');
      display.value = digits.join('');
    }
  });

  equalsButton.addEventListener('click', function() {
    num2 = parseFloat(digits.join(''));
    let result = operate(operator, num1, num2);
    display.value = result;
    digits = [];
    operator = null;
  });
});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }

    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default: return "Invalid operator";
    }
}
