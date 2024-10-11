const readlineSync = require("readline-sync");

const numero = readlineSync.question("Introduce un numero: ");

if (isNaN(numero) || numero <= 0) {
  console.log("Por favor introduce un número mayor que 0.");
  return;
}

for (i = 1; i <= numero; i++) {
  let espacios = " ".repeat(numero - i);
  let simbolo = "*".repeat(2 * i - 1);
  console.log(espacios + simbolo);
}
