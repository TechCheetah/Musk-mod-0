const readlineSync = require('readline-sync');
const numero = readlineSync.questionInt("Introduce un número: ");


function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  if (esPrimo(numero)) {
    console.log(numero + " es un número primo.");
  } else {
    console.log(numero + " no es un número primo.");
  }