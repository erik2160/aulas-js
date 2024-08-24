/*
Para rodar, use npm install readline-sync
Depois no terminal, utilize node Calculadora.js
*/

const read = require('readline-sync'); // Importa a biblioteca para ler entrada de usuário pelo terminal

const firstNumber = parseInt(read.question("First number: ")); // Leitura do primeiro número
const secondNumber = parseInt(read.question("Second number: ")); // Leitura do segundo número

const operation = parseInt(read.question("Operation:\n[1] - Sum\n[2] - Subtract\n[3] - Multiply\n[4] - Divide\n-> ")); // Leitura da operação 

console.log("Result: " + doOperation(operation, firstNumber, secondNumber)); // Chama a função para fazer a operação e printa no console

function doOperation(operator, firstNumber, secondNumber) { // Função que recebe o número para fazer a operação, o primeiro número e o segundo número
    // Switch para validar a operação 
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