const readlineSync = require("readline-sync");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerAttack() {
  return getRandomInt(5, 10);
}

function playerDefend() {
  return getRandomInt(1, 5);
}

function monsterAttack() {
  return getRandomInt(5, 10);
}

function rpgGame() {
  let zombieHp = 50;
  let humanoHp = 50;
  console.log("Combate contra el zombie!");

  while (zombieHp > 0 && humanoHp > 0) {
    console.log("\nHumano HP: ",humanoHp, "Zombie HP:" ,zombieHp, "🧟");
    let action = readlineSync.question("Elige una acción (atacar/defender): ");

    let daño_zombie = monsterAttack();

    if (action === "atacar") {
      let daño = playerAttack();
      zombieHp -= daño;
      console.log("Has atacado al zombie 🧟 y causado ",daño, "puntos de daño. Al zombie le quedan ",zombieHp, "puntos de vida.");
    } else if (action === "defender") {
      let bloqueoHumano = playerDefend();
    
      console.log("Has bloqueado",bloqueoHumano, "puntos de daño.");
    } else {
      console.log("Acción no válida, por favor elige 'atacar' o 'defender'.");
      continue;
    }

    humanoHp -= daño_zombie;
    console.log("El zombie te ha atacado causando ",daño_zombie ,"puntos de daño. Te quedan ",humanoHp, "puntos.");
  }

  if (humanoHp <= 0) {
    console.log("Has perdido");
  } else {
    console.log("¡Has ganado!");
  }
}

rpgGame();
