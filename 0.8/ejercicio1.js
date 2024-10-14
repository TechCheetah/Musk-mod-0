const readlineSync = require('readline-sync');

function palabrasRepetidas(texto) {
    // Convertimos el texto a minúsculas y eliminamos caracteres especiales para buscar palabras iguales
    const palabras = texto.toLowerCase().replace(/[^\w\s]/g, '').split(' '); 
    const repetidas = [];
    
    for (let i = 0; i < palabras.length; i++) {
        let contador = 0;
        for (let j = 0; j < palabras.length; j++) {
            if (palabras[i] === palabras[j]) {
                contador++;
            }
        }
        if (contador > 1 && !repetidas.includes(palabras[i])) {
            repetidas.push(palabras[i]);
        }
    }
    
    return repetidas;
}


const frase = readlineSync.question("Por favor, introduce una frase: ");


const repetidas = palabrasRepetidas(frase);
console.log("Palabras repetidas:", repetidas , ":" );
