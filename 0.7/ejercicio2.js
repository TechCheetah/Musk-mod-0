const readlineSync = require("readline-sync");


function calcularArea(radio) {
  const PI = Math.PI;
  const area = PI * Math.pow(radio, 2);
  return area;
}

const radio = parseFloat(
  readlineSync.question("Introduce el radio de la circunferencia: ")
);

if (isNaN(radio) || radio <= 0) {
  console.log("Por favor, introduce un número válido mayor que cero.");
} else {
  const area = calcularArea(radio);
  console.log("El área de la circunferencia es:", area);
}
