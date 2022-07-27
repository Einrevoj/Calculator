let firstNumber;
let secondNumber;
let operation;
let sum;

console.log(firstNumber, operation, secondNumber);

function hello() {
    console.log("Hello, World!");
}

function clickNumber(input) {
    if (operation === undefined) {
        if (firstNumber === undefined) {
            firstNumber = String(input);
        } else {
            firstNumber = String(firstNumber) + String(input);
        }
    } else {
        if (secondNumber === undefined) {
            secondNumber = String(input);
        } else {
            secondNumber = String(secondNumber) + String(input);
        }
    }

    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case '+': {
            operation = '+';
            break;
        }
        case '=': {
            sum = Number(firstNumber) + Number(secondNumber);
            console.log(sum);
            firstNumber = undefined;
            secondNumber = undefined;
            operation = undefined;
            break;
        }
        default: {
            console.log("Unknown operation: " + input);
        }
    }
    
    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case '-': {
            operation = '-';
            break;
        }
        case '=': {
            subtract = Number(firstNumber) - Number(secondNumber);
            console.log(subtract);
            firstNumber = undefined;
            secondNumber = undefined;
            operation = undefined;
            break;
        }
        default: {
            console.log("Unknown operation: " - input);
        }
    }
    
    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case 'x': {
            operation = 'x';
            break;
        }
        case '=': {
            multiply = Number(firstNumber) * Number(secondNumber);
            console.log(multiply);
            firstNumber = undefined;
            secondNumber = undefined;
            operation = undefined;
            break;
        }
        default: {
            console.log("Unknown operation: " * input);
        }
    }
    
    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case '÷': {
            operation = '÷';
            break;
        }
        case '=': {
            divide = Number(firstNumber) / Number(secondNumber);
            console.log(divide);
            firstNumber = undefined;
            secondNumber = undefined;
            operation = undefined;
            break;
        }
        default: {
            console.log("Unknown operation: " / input);
        }
    }
    
    console.log(firstNumber, operation, secondNumber);
}
