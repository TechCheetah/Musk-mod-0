const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");
const numero = parseInt(input);
if ( isNaN (numero)){
    console.log("El valor introducido no es un número");
}
else if (numero % 2=== 0 && numero > 0 ) {
    console.log("El número es par y positivo"); 
} else if (numero % 2=== 0 && numero < 0 ) {
    console.log("El número es par y negativo");
} else if (numero % 2 !== 0 && numero > 0) {
    console.log("El número es impar y positivo");
} else if (numero % 2 !== 0 && numero < 0 ) {
    console.log("El número es impar y negativo");
} 
else {
    console.log("El número es 0");
}