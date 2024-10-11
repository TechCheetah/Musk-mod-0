const readLine = require("readline-sync");

let numeroElegido = parseInt(readLine.question("Introduce un número entre 0 y 10: "), 10);

if (numeroElegido === 0){
    console.log("cero");
} else if (numeroElegido === 1){
    console.log("uno");
} else if (numeroElegido === 2){
    console.log("dos");
} else if (numeroElegido === 3){
    console.log("tres");
} else if (numeroElegido === 4){
    console.log("cuatro");
} else if (numeroElegido === 5){
    console.log("cinco");
} else if (numeroElegido === 6) {
    console.log("seis");
} else if (numeroElegido === 7){
    console.log("siete");
} else if (numeroElegido === 8){
    console.log("ocho");
} else if (numeroElegido === 9){
    console.log("nueve");
} else if (numeroElegido === 10){
    console.log("diez");
}
else {
    console.log("El número no está entre 0 y 10, vuelve a introducir un numero");
}