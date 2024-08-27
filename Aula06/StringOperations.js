const string = "Você nunca encontrará tempo para nada. Se você quer tempo, deve criá-lo.";

console.log(convertToLowerCase(string));
console.log(extractSingleWord(string, "nunca"));
console.log(extractSingleWord(string, "erik"));
console.log(replaceWord(string, "nunca", "erik"));

function convertToLowerCase(string) {
    return string.toLowerCase();
}

function extractSingleWord(string, word) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) { 
        if (words[i] === word) {
            return `Word "${words[i]}" found.`;
        }
    } 
    return `Word "${word}" not found.`;
}

function replaceWord(string, word, replace) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) { 
        if (words[i] === word) {
            words[i] = replace;
            return words.join(' ');
        }
    } 
    return `Word "${word}" not found.`;
}