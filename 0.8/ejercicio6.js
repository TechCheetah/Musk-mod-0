const crypto = require("crypto");


const lista = [];

for (let i = 0; i < 100000; i++) {
  lista.push(crypto.randomInt(1000)); 
}


let listaBurbuja = lista.slice();
console.time("Ordenación por burbuja");


for (let i = 0; i < listaBurbuja.length - 1; i++) {
  for (let j = 0; j < listaBurbuja.length - i - 1; j++) {
    if (listaBurbuja[j] > listaBurbuja[j + 1]) {
      
      let aux = listaBurbuja[j];
      listaBurbuja[j] = listaBurbuja[j + 1];
      listaBurbuja[j + 1] = aux;
    }
  }
}

console.timeEnd("Ordenación por burbuja");
