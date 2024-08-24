const number = 14483; // initializes the number variable
let sum = 0; // initializes the sum variable
let numberArray = []; // initializes the array

const numberString = number.toString(); // converts the number to a string

for (let i = 0; i < numberString.length; i++) {
  // for the length of the string
  numberArray.push(parseInt(numberString[i])); // takes the i-th character of the string, converts it to an int, and adds it to the number array
}

for (let i = 0; i < numberArray.length; i++) {
  // for the length of the number array
  sum += numberArray[i]; // increments the sum by the i-th number in the number array
}

console.log(`The sum of the digits of the number ${number} is: ${sum}`);