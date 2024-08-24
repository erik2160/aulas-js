/*
To run, use npm install readline-sync
Then in the terminal, use node RandomNumber.js
*/

const read = require('readline-sync'); // Imports the library to read user input from the terminal

const randomNumber = Math.floor(Math.random() * 100); // Formula to generate a random number between 1 and 100
let guessed = false; // Variable to check if the user has guessed correctly

while (!guessed) { // While guessed is false (user has not guessed correctly)
    const userGuess = parseInt(read.question('Try to guess the random number: ')); // Prompts the user to enter a number

    if (userGuess === randomNumber) { // If the guessed number equals the random number, the user guesses correctly
        guessed = true;
        console.log("Congratulations! You guessed the number correctly.");
    } else if (userGuess < randomNumber) { // If the guessed number is less than the random number
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again."); // Otherwise, the number is higher
    }
}
