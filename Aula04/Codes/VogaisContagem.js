const vogais = ["a", "e", "i", "o", "u"]; // array de vogais
const palavra = "otorrinolaringologista"; // palavra de teste

let contagem = 0; // inicializa a contagem de vogais

for (let i = 0; i < palavra.length; i++) {
  // irá rodar pelo tamanho da palavra
  let letra = palavra[i]; //irá pegar a letra no índice i
  if (vogais.includes(letra)) {
    // se o array de vogal possuir a letra, então icrementa 1 na contagem de vogais
    contagem++;
  }
}

console.log(`A palavra "${palavra}" possui ${contagem} vogais.`);
