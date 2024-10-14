const readlineSync = require("readline-sync");


function calcularLongitudCircunferencia(radio) {
    const PI = Math.PI;
    return 2 * PI * radio;
}


const radio = parseFloat(readlineSync.question("Introduce el radio de la circunferencia: "));


if (isNaN(radio) || radio <= 0) {
    console.log("Por favor, introduce un número mayor que cero.");
} else {
    
    const longitud = calcularLongitudCircunferencia(radio);
    console.log("La longitud de la circunferencia es:", longitud);
}
