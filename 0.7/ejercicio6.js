const readLine = require("readline-sync");
const n = parseInt(readLine.question("Introduce el tamaño de la matriz cuadrada: "), 10);

function generarMatriz(n) {
    const matriz = [];
    let contador = 1;

    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(contador);
            contador++;
        }
        matriz.push(fila);
    }

    return matriz;
}

const resultado = generarMatriz(n);
console.log(resultado);
