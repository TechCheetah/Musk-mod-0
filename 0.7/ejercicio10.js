function crearMatrizAleatoria(filas, columnas) {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(Math.floor(Math.random() * 10)); 
        }
        matriz.push(fila);
    }
    return matriz;
}


function transponerMatriz(matriz) {
    const matrizTraspuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        const nuevaFila = [];
        for (let j = 0; j < matriz.length; j++) {
            nuevaFila.push(matriz[j][i]); 
        }
        matrizTraspuesta.push(nuevaFila);
    }
    return matrizTraspuesta;
}


const matrizMagica = crearMatrizAleatoria(3, 3);


const matrizTraspuesta = transponerMatriz(matrizMagica);


console.log("Matriz traspuesta:");
console.log(matrizTraspuesta);
