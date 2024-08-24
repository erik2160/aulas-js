/*
Para rodar, use npm install readline-sync
Depois no terminal, utilize node Calculadora.js
*/

const read = require('readline-sync'); // Importa a biblioteca para ler a entrada do usuário

const number = parseInt(read.question("Insert the number: ")); // Pede para o usuário inserir o número

// Chama a função isPrime para verificar se o número é primo e printa o resultado no console.
if (isPrime(number)) { 
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}

function isPrime(number) {
    if (number <= 1) { // Se o número for menor ou igual a 1 ele não é considerado primo
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {  // Fórmula para calcular a primalidade de um número
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}