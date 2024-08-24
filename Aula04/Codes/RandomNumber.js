/*
Para rodar, use npm install readline-sync
Depois no terminal, utilize node Calculadora.js
*/

const read = require('readline-sync'); // Importa a biblioteca para ler entradas do usuário pelo terminal

const randomNumber = Math.floor(Math.random() * 100); // Fórmula para gerar um número aleatório entre 1 e 100
let guessed = false; // Variável que irá veriicar se o usuário já acertou

while (!guessed) { // Enquanto o guessed for true (usuário não acertou)
    const userGuess = parseInt(read.question('Try to guess the random number: ')); // Irá pedir para o usuário inserir o número

    if (userGuess === randomNumber) { // Se o número de adivinhar for igual ao número aleatório o usuário irá acertar
        guessed = true;
        console.log("Congratulations! You guessed the number correctly.");
    } else if (userGuess < randomNumber) { // Caso o número de adivinhar seja menor que o número aleatório
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again."); // Caso contrário, o número é maior
    }
}

