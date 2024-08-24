/*
To run, use npm install readline-sync
Then in the terminal, use node Calculator.js
*/

const read = require('readline-sync'); // Imports the library to read user input from the terminal

const firstNumber = parseInt(read.question("First number: ")); // Reads the first number
const secondNumber = parseInt(read.question("Second number: ")); // Reads the second number

const operation = parseInt(read.question("Operation:\n[1] - Sum\n[2] - Subtract\n[3] - Multiply\n[4] - Divide\n-> ")); // Reads the operation

console.log("Result: " + doOperation(operation, firstNumber, secondNumber)); // Calls the function to perform the operation and prints the result to the console

function doOperation(operator, firstNumber, secondNumber) { // Function that takes the operation number, the first number, and the second number
    // Switch to validate the operation
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
