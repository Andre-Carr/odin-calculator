const inputDisplay = document.querySelector('.inputDisplay');
const expressionDisplay = document.querySelector('.expressionDisplay');

let isOutput = true;
const keyPad = document.querySelector('.keyPad');
keyPad.addEventListener('click', (event) => {
    const target = event.target;
    if(target.classList.contains('key')) {
        target.classList.forEach((keyClass) => {
            switch(keyClass) {
                case 'clearKey':
                    inputClear(target.getAttribute('value'));
                    break;
                case 'numberKey':
                    inputNumber(target.getAttribute('value'));
                    break;
                case 'operationKey':
                    if(isExprEmpty()) {
                        inputOperation(target.getAttribute('value'));
                    } else {
                        const expression = expressionDisplay.getAttribute('value').split(' ');
                        operate(expression[1], parseFloat(expression[0]), parseFloat(inputDisplay.getAttribute('value')));
                        inputOperation(target.getAttribute('value'));
                    }
                    break;
            }
        });
    }
});

const inputNumber = function inputNumberKey(keyValue) {
    if(parseInt(inputDisplay.getAttribute('value')) === 0) {
        inputDisplay.setAttribute('value', keyValue);
    } else {
        inputDisplay.setAttribute('value', inputDisplay.getAttribute('value') + keyValue);
    } 
    isOutput = false;
}

const inputClear = function inputClearKey(keyValue) {
    switch(keyValue) {
        case 'clear':
            clearInput();
            break;
        case 'allClear':
            clearInput();
            clearExpression();
            break;
    }
}

const clearInput = function inputInputDisplay() {
    inputDisplay.setAttribute('value', 0);
}

const clearExpression = function clearExpressionDisplay() {
    expressionDisplay.setAttribute('value', '');
}

const inputOperation = function inputOperationKey (keyValue) {
    if(keyValue === '=') {
        inputExpression('', keyValue);
    } else if(parseFloat(inputDisplay.getAttribute('value')) !== 0) {
        inputExpression(inputDisplay.getAttribute('value'), keyValue);
        clearInput();
    }
    
}

const operate = function inputOperationKey(operator, numberOne, numberTwo) {
    switch(operator) {
        case '/':
            inputDisplay.setAttribute('value', divide(numberOne, numberTwo));
            break;
        case '*':
            inputDisplay.setAttribute('value', multiply(numberOne, numberTwo));
            break;
        case '-':
            inputDisplay.setAttribute('value', subtract(numberOne, numberTwo));
            break;
        case '+':
            inputDisplay.setAttribute('value', add(numberOne, numberTwo));
            break;
    }
    isOutput = true;
}

const inputExpression = function inputExpressionDisplay(number, operator) {
    expressionDisplay.setAttribute('value', `${number} ${operator}`);
}

const divide = function division(a, b) {return (b !== 0) ? a / b : "Cannot divide by zero";}

const multiply = function multiplication(a, b) {return a * b;}

const subtract = function subtraction(a, b) {return a - b};

const add = function addition(a, b) {return a + b;}

const isExprEmpty = function isExpressionDisplayEmpty() {return expressionDisplay.getAttribute('value') === '';}