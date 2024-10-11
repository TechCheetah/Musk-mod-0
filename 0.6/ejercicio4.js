const readLine = require("readline-sync");

const userInput = readLine.question("Introduce un número para multiplicarlo: "); 
let numero = parseInt(userInput);

if (isNaN(numero)){
    console.log("Por favor introduce un numero");
} else {
    for (let i = 1; i <= 10; i++){
        console.log(i + " x " + numero + " = " + i * numero);
    } 
}
