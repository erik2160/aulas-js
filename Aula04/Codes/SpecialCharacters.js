/*
Para rodar, use npm install readline-sync
Depois no terminal, utilize node Calculadora.js
*/

const read = require('readline-sync'); // Importa a biblioteca para ler entrada do usuário
let count = 0; // Inicializa a variável para contar os caracteres especiais

const string = read.question(': '); // O usuário irá inserir a palavra

console.log(`In the word ${string} has ${hasSpecialCharacters(string)} special characters.`); // Irá printar quantas vezes houve caracteres especiais

function hasSpecialCharacters(string) { // Função que recebe a palavra como parâmetro
    const specialCharacters = ["@", "#", "$", "%", "&"]; // Array de caracteres especiais para serem validados
    for (let i = 0; i < string.length; i++) { // Para toda a string
        if (specialCharacters.includes(string[i])) { // Irá verificar se o caractere está incluso na lista de caracteres especiais
            count++; // Em caso verdadeiro, a contagem é icrementada em 1
        }
    }
    return count; // Retorna o contador de caracteres especiais
}