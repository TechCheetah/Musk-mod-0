const readlineSync = require("readline-sync");

function crearMatrizProducto(n) {
    const matriz = [];

    for (let i = 0; i < n; i++) {
        const fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(i * j); 
        }
        matriz.push(fila);
    }

    return matriz;
}


const numero = parseInt(readlineSync.question("Introduce un número para generar una matriz cuadrada: "), 10);


const matriz = crearMatrizProducto(numero);
console.log(matriz);
