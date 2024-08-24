const numero = 14483; // inicializa a variavel do numero
let soma = 0; // inicializa a variavel da soma
let arrayNumeros = []; // inicializa o array

const numeroString = numero.toString(); // converte o numero para uma string

for (let i = 0; i < numeroString.length; i++) {
  // para o tamanho da string
  arrayNumeros.push(parseInt(numeroString[i])); // pega a string i e converte para um int e adiciona no array de numeros
}

for (let i = 0; i < arrayNumeros.length; i++) {
  // para o tamanho do array de numeros
  soma += arrayNumeros[i]; // icrementa a soma pegando o numero i do array de numeros
}

console.log(`A soma dos dígitos do número ${numero} é: ${soma}`);
