const readlineSync = require("readline-sync");
const frase = readlineSync.question("Escribe una frase: ");

function contarFrecuenciaCaracteres(cadena) {
  const mapaFrecuencia = new Map();

  for (let char of cadena) {
    mapaFrecuencia.set(char, (mapaFrecuencia.get(char) || 0) + 1); 
  }

  return mapaFrecuencia;
}

const resultado = contarFrecuenciaCaracteres(frase);
console.log(resultado);
