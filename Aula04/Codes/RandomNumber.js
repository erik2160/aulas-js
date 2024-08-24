/*
Para rodar, use npm install readline-sync
Depois no terminal, utilize node Calculadora.js
*/

const read = require('readline-sync');

const randomNumber = Math.floor(Math.random() * 100);
let guessed = false;

console.log(randomNumber);

while (!guessed) {
    const userGuess = parseInt(read.question('Try to guess the random number: '));

    if (userGuess === randomNumber) {
        guessed = true;
        console.log("Congratulations! You guessed the number correctly.");
    } else if (userGuess < randomNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}

