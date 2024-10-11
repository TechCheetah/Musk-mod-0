const readlineSync = require("readline-sync");

const altura = parseInt(readlineSync.question("Introduce un número para la altura: "), 10);
const base = parseInt(readlineSync.question("Introduce un número para la base: "), 10);

if (isNaN(altura) || isNaN(base) || altura <= 0 || base <= 0) {
  console.log("Por favor, introduce valores válidos mayores que 0.");
} else {
  for (i = 0; i < base; i++) { 
      let linea = "";
      for (j = 0; j < altura; j++) {
          if (j === 0 || j === altura - 1 || i === 0 || i === base - 1) {
              linea += "*";
          } else {
              linea += " ";
          }
      }
      console.log(linea);
  }
}
