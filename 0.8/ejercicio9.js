const readlineSync = require('readline-sync');


const inputTexto = readlineSync.question("Introduce una secuencia de paréntesis: ");


function verificarParentesisBalanceados(secuencia) {
  let balance = 0;

  for (let caracter of secuencia) {
    if (caracter === '(') {
      balance++;
    } else if (caracter === ')') {
      balance--;
    }

    
    if (balance < 0) {
      return false;
    }
  }

 
  return balance === 0;
}


if (verificarParentesisBalanceados(inputTexto)) {
  console.log("La secuencia de paréntesis está balanceada.");
} else {
  console.log("La secuencia de paréntesis no está balanceada.");
}
