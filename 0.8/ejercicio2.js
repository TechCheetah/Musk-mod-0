// Lista de skaters famosos
const skatersFamosos = ['Tony Hawk', 'Rodney Mullen', 'Nyjah Huston', 'Paul Rodriguez', 'Chris Cole', 'Leticia Bufoni', 'Bam Margera', 'Ryan Sheckler', 'Bob Burnquist', 'Tom Penny'];

// Función para generar un array aleatorio de skaters famosos
function generarArraySkaters(skateOrDie) {
    const array = [];
    for (let i = 0; i < skateOrDie; i++) {
        const skaterAleatorio = skatersFamosos[Math.floor(Math.random() * skatersFamosos.length)];
        array.push(skaterAleatorio);
    }
    return array;
}

// Función para diferenciar los skaters
function diferenciarArrays(array1, array2) {
    return array1.filter(function(skater) {
        return !array2.includes(skater);
    });
}

// Generar dos grupos de skaters con nombres aleatorios
const team1 = generarArraySkaters(4);
const team2 = generarArraySkaters(4);

console.log("Grupo 1 de skaters:", team1);
console.log("Grupo 2 de skaters:", team2);

// Comparar los skaters
const skatersUnicosGrupo1 = diferenciarArrays(team1, team2);
console.log('Skaters en el Grupo 1 que no están en el Grupo 2:', skatersUnicosGrupo1);
