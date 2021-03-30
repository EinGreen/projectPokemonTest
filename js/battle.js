// variables for Player:
var selectedFighter = Cookies.get(`selectedPokemon`);
var pokemonDefaultHp = Cookies.get(`pokemonDefaultHp`);
var pokemonCurrentHp = Cookies.get(`pokemonCurrentHp`);
// variables for Hp:
var enemyFighter = Cookies.get(`enemyPokemon`);
var enemyDefaultHp = Cookies.get(`enemyDefaultHp`);
var enemyCurrentHp = Cookies.get(`enemyCurrentHp`);
// variables for HTML File:
var battleSimulator = document.getElementById(`battleSimulator`);
var winMessage = document.getElementsByClassName(`winMessage`);
// variables for Fighters:
var usersFighter = document.getElementById(`usersFighter`);
var simulateSquirtle = document.getElementById(`simulateSquirtle`);
var simulateBulbasaur = document.getElementById(`simulateBulbasaur`);
var simulateFinal = document.getElementById(`simulateFinal`);
// variables for HP control:
var playerhealth = document.getElementById("playerhealth");
var enemyhealth = document.getElementById("enemyhealth"); 
// move variables:
var bulbasaurAttack = document.getElementById(`bulbasaurAttack`);
var bulbasaurHeal = document.getElementById(`bulbasaurHeal`);



playerhealth.value = pokemonDefaultHp;
enemyhealth.value = enemyDefaultHp

function deal(num) {
    var dealt = enemyhealth.value -= num;
    Cookies.set(`enemyCurrentHp`, dealt);
    return dealt;
}

function take(number) {
    var taken = playerhealth.value -= number;
    Cookies.set(`pokemonCurrentHp`, taken);
    return taken;
}

function gameCondition() {
    if (enemyhealth.value === 0) {
        winMessage.innerText = `${selectedFighter} Wins!`
    } else if (playerhealth.value === 0) {
        winMessage.innerText = `Game Over. Better Luck Next Time`
    }
}

if (selectedFighter === undefined) {
    console.log(`user has not selected a fighter`);
} else {
    usersFighter.innerText = `You have chosen: ${selectedFighter}`;
}

bulbasaurAttack.onclick = function() {
    deal(10); 
    take(5);
};






