const readLine = require("readline-sync");

const year = readLine.question("Introduce un año: ");

if (isNaN(year)) {
  console.log("Por favor introduce un año.");
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Es bisiesto");
  } else {
    console.log("No es bisiesto");
  }
}
