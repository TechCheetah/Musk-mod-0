const readLine = require("readline-sync");
const palabra = readLine.question("Introduce una palabra: ");

function darVueltaTexto(texto) {
    const cajaMagica = [];

    
    for (let caracter of texto) {
        cajaMagica.push(caracter);
    }

    let textoDelReves = '';

    
    while (cajaMagica.length > 0) {
        textoDelReves += cajaMagica.pop();
    }

    return textoDelReves;
}


console.log(darVueltaTexto(palabra));  

