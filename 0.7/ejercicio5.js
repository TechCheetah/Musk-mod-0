const readlineSync = require("readline-sync");


const cadenaEntrada = readlineSync.question(
  "Introduce una lista de elementos separados por comas: ");
const array = cadenaEntrada.split(",").map((element) => element.trim()); // Convertir la cadena en un array y eliminar espacios

function verificarElementos(array) {
  const conteo = []; 
  const repetidos = [];
  let todosSonUnicos = true;

  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];

    
    if (!conteo[elemento]) {
      conteo[elemento] = 0;
    }
    conteo[elemento]++;

    
    if (conteo[elemento] > 1 && !repetidos.includes(elemento)) {
      repetidos.push(leemento);
      todosSonUnicos = false;
    }
  }

  
  return { todosSonUnicos, repetidos };
}


const resultados = verificarElementos(array);


if (resultados.todosSonUnicos) {
  console.log("Todos los elementos son únicos.");
} else {
  console.log("Elementos repetidos:", resultados.repetidos);
}
