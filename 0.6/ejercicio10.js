const readLine = require("readline-sync");

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let numeroUsuario = 0;

while (numeroUsuario !== numeroAleatorio) {
    numeroUsuario = parseInt(readLine.question("Adivina el número (entre 1 y 10): "), 10);
    intentos++;

    if (numeroUsuario < 1 || numeroUsuario > 10 || isNaN(numeroUsuario)) {
        console.log("Por favor, introduce un número válido entre 1 y 10.");
    } else if (numeroUsuario !== numeroAleatorio) {
        console.log("No es correcto. Inténtalo con otro número.");
    }
}

console.log("¡Correcto! Adivinaste el número " + numeroAleatorio + " después de " + intentos + " intento(s).");

