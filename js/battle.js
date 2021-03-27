var selectedFighter = Cookies.get(`selectedPokemon`);
var battleSimulator = document.getElementById(`battleSimulator`);
// variables for Fighters
var usersFighter = document.getElementById(`usersFighter`);
var simulateSquirtle = document.getElementById(`simulateSquirtle`);
var simulateBulbasaur = document.getElementById(`simulateBulbasaur`);
var simulateFinal = document.getElementById(`simulateFinal`);
// variables for HP
var playerhealth = document.getElementById("playerhealth");
var enemyhealth = document.getElementById("enemyhealth"); 

var bulbasaurAttack = document.getElementById(`bulbasaurAttack`);
var bulbasaurHeal = document.getElementById(`bulbasaurHeal`);

function deal(num) {
    var dealt = enemyhealth.value -= num;
    return dealt;
}

function take(num) {
    var taken = playerhealth.value -= num;
    return taken;
}

bulbasaurAttack.onclick = function() {deal(10)};

// function heal(num) {
//     var heal = playerhealth.value += num;
//     return heal;
// }

// bulbasaurHeal.onclick = function() {heal(15)};


if (selectedFighter === undefined) {
    console.log(`user has not selected a fighter`);
} else {
    usersFighter.innerText = `You have chosen: ${selectedFighter}`;
}

