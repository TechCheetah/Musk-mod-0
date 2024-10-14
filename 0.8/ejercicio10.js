const readlineSync = require('readline-sync');

const texto = readlineSync.question("Introduce una secuencia de paréntesis, corchetes y llaves: ");

function esSecuenciaValida(secuencia) {
  const stack = [];

  for (let char of secuencia) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0) return false; 
      const ultimo = stack.pop();
      if (
        (char === ')' && ultimo !== '(') ||
        (char === '}' && ultimo !== '{') ||
        (char === ']' && ultimo !== '[')
      ) {
        return false; 
      }
    }
  }

  return stack.length === 0; // Si la pila está vacía, esta ok
}

if (esSecuenciaValida(texto)) {
  console.log("Están balanceados");
} else {
  console.log("No están balanceados");
}
