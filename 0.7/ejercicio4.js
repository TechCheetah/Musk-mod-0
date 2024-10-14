const readlineSync = require("readline-sync");

const cadenaNumeros = readlineSync.question("Introduce una cadena de números separados por comas: ");

function sumaYmediaAritmetica(cadena) {
  const numeros = cadena.split(",").map(Number);

  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  const media = suma / numeros.length;

  return { suma, media };
}

const resultados = sumaYmediaAritmetica(cadenaNumeros);
console.log("La suma es:", resultados.suma);
console.log("La media aricmetica es:", resultados.media);
