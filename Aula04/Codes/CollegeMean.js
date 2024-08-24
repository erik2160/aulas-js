/*
To run, use npm install readline-sync
Then in the terminal, use node CollegeMean.js
*/

const read = require('readline-sync'); // Imports the library to read user input

// Reading the students' grades
const firstGrade = parseFloat(read.question('First grade: '));
const secondGrade = parseFloat(read.question('Second grade: '));
const thirdGrade = parseFloat(read.question('Third grade: '));
const fourthGrade = parseFloat(read.question('Fourth grade: '));

// Calculates the average of the grades using the calculateMean function
const mean = calculateMean(firstGrade, secondGrade, thirdGrade, fourthGrade);

if (mean >= 7) { // If the average is greater than or equal to 7, the student is approved
    console.log(`Approved with mean ${mean}.`);
} else if ((mean <= 6.99) || (mean >= 5)) { // If the average is less than 7 or equal to 5, the student is in recuperation
    console.log(`Recuperation with mean ${mean}.`);
} else { // If none of the conditions are met, the student is failed
    console.log(`Failed with mean ${mean.toFixed(2)}.`);
}

function calculateMean(firstGrade, secondGrade, thirdGrade, fourthGrade) { // The function takes 4 grade parameters
    return (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4; // The function returns the sum of the grades divided by 4
}
