const vowels = ["a", "e", "i", "o", "u"]; // array of vowels
const word = "otorrinolaringologista"; // word de teste

let count = 0; // initializes the vowel count

for (let i = 0; i < word.length; i++) {
  // iterates through the length of the word
  let letter = word[i]; // gets the letter at index i
  if (vowels.includes(letter)) {
    // if the array of vowels includes the letter, then increments the vowel count by 1
    count++;
  }
}

console.log(`The word "${word}" has ${count} vowels.`);