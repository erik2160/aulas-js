/*
Para rodar, use npm install readline-sync
Depois no terminal, utilize node Calculadora.js
*/

const read = require('readline-sync'); // Importa a biblioteca para ler a entrada do usuário

// Leitura das notas dos alunos
const firstGrade = parseFloat(read.question('First grade: '));
const secondGrade = parseFloat(read.question('Second grade: '));
const thirdGrade = parseFloat(read.question('Third grade: '));
const fourthGrade = parseFloat(read.question('Fourth grade: '));


// Calcula a média das notas utilizando a função de calcular a média
const mean = calculateMean(firstGrade, secondGrade, thirdGrade, fourthGrade);

if (mean >= 7) { // Se a média for maior ou igual a 7 o aluno está aprovado
    console.log(`Approved with mean ${mean}.`);
} else if ((mean <= 6.99) || (mean >= 5)) { // Caso a média seja menor que 7 ou igual a 5 ou aluno está de recuperação
    console.log(`Recuperation with mean ${mean}.`);
} else { // Caso não encaixe em nenhuma condição, o aluno está reprovado
    console.log(`Failed with mean ${mean.toFixed(2)}.`);
}

function calculateMean(firstGrade, secondGrade, thirdGrade, fourthGrade) { // A função recebe 4 parâmetros de nota 
    return (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4; // A função retorna a soma das notas dividido por 4
}

