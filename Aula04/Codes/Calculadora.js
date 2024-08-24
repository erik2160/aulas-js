/*
Para rodar, use npm install readline-sync
Depois no terminal, utilize node Calculadora.js
*/

const read = require('readline-sync');

const firstNumber = parseInt(read.question("First number: "));
const secondNumber = parseInt(read.question("Second number: "));

const operation = parseInt(read.question("Operation:\n[1] - Sum\n[2] - Subtract\n[3] - Multiply\n[4] - Divide\n-> "));

console.log("Result: " + doOperation(operation, firstNumber, secondNumber));

function doOperation(operator, firstNumber, secondNumber) {
    switch (operator) {
        case 1:
            return firstNumber + secondNumber;
        case 2:
            return firstNumber - secondNumber;
        case 3:
            return firstNumber * secondNumber;
        case 4:
            if (secondNumber === 0) {
                console.log("Cannot divide by zero.");
                return null;
            }
            return firstNumber / secondNumber;
        default:
            console.log("Invalid operation.");
            return null;
    }
}