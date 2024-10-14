const readlineSync = require("readline-sync");

const texto = readlineSync.question("Introduce un texto: ");

function textoAMatriz(textoEntrada) { // Cambié el nombre de 'texto' para evitar el conflicto :)
    const palabras = textoEntrada.split(' '); 
    const anchoMatriz = 5; 
    const matriz = [];
    let fila = [];

    for (let i = 0; i < palabras.length; i++) {
        fila.push(palabras[i]);

        if (fila.length === anchoMatriz) {
            matriz.push(fila);
            fila = [];
        }
    }

    if (fila.length > 0) {
        matriz.push(fila);
    }

    return matriz;
}

const resultado = textoAMatriz(texto);
console.log(resultado);
