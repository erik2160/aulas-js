let sum = 0; // inicializar a soma

for (let i = 1; i <= 20; i++) {
  // para todos os numeros de 1 a 20
  if (i % 2 == 0) {
    // se o numero for par, icrementa i no sum
    sum += i;
  }
}

console.log("Soma dos números pares de 1 a 20:", sum);
