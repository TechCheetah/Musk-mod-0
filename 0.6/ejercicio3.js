const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
let numeroFactorial = parseInt(input);

let factorial = 1;

for (let i = 1; i <= numeroFactorial; i++) {
    factorial = factorial * i; 
}

console.log("El factorial de " + numeroFactorial + " es: " + factorial);
