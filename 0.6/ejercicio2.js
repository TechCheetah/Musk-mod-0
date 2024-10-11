const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
const num1 = parseInt(input);
const input2 = readLine.question("Introduce otro numero: ");
const num2 = parseInt(input2);
const input3 = readLine.question("Introduce otro numero: ");
const num3 = parseInt(input3);

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log("Alguno de los números introducidos es par.");
} else {
    console.log("No hay números pares.");
    }