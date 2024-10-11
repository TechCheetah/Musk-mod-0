const readLine = require("readline-sync");

const frase = readLine.question("Introduce una frase: ");

const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let contador = 0;


for (let i = 0; i < frase.length; i++) { 
  let caracter = frase[i]; 
  if (vocales.includes(caracter)) {
    contador++;
  }
}
console.log("El número de vocales en la cadena es: " + contador);
