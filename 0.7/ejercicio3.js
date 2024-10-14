const readlineSync = require("readline-sync");

const radio = readlineSync.question("Introduce el radio de la circulo ");

if (isNaN(radio) || radio <= 0) {
  console.log("Por favor, introduce un número válido.");
} else {
  const { area, circunferencia } = calcularAreaYcircunferencia(radio);
  console.log("La circunferencia es:", circunferencia);
  console.log("El área es: ", area);
}

function calcularAreaYcircunferencia(radio) {
  const PI = Math.PI;
  const area = PI * Math.pow(radio, 2);
  const circunferencia = 2 * PI * radio;
  return { area, circunferencia };
}
