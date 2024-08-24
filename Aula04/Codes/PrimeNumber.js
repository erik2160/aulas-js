/*
To run, use npm install readline-sync
Then in the terminal, use node PrimeNumber.js
*/

const read = require('readline-sync'); // Imports the library to read user input

const number = parseInt(read.question("Insert the number: ")); // Asks the user to insert a number

// Calls the isPrime function to check if the number is prime and prints the result to the console.
if (isPrime(number)) { 
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}

function isPrime(number) {
    if (number <= 1) { // If the number is less than or equal to 1, it is not considered prime
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {  // Formula to calculate the primality of a number
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
