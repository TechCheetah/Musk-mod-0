const readlineSync = require("readline-sync");
console.log("🤔 ¿Sabías que un palíndromo es una palabra o frase que se lee igual al derecho y al revés? ¡Como 'Anita lava la tina' o 'A mamá Roma le aviva el amor a mamá'!");
const frase = readlineSync.question("💡 Ahora, introduce una frase para ver si es un palíndromo mágico o solo una frase normal: ");

function esPalindromo(frase) {
    // Quitar espacios, convertir a minúsculas y eliminar caracteres especiales o números (excepto 0-9)  para simplificar la comparación de palíndromos.
    const textoNormalizado = frase.toLowerCase().replace(/\s+/g, "").trim();
    
    // Invertir el string textoNormalizado
    const textoInvertido = textoNormalizado.split("").reverse().join("");
    
    
    return textoNormalizado === textoInvertido;
}


if (esPalindromo(frase)) {
    console.log("🎉 ¡Guau! ¡La frase es un palíndromo! 🚀 ¡Parece que tienes superpoderes de simetría!");
} else {
    console.log("😅 Lo siento... ¡La frase no es un palíndromo! Pero al menos hiciste el intento, ¡eso cuenta! 💪");
}
