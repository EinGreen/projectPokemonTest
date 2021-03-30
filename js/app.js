// this fuction allows the cards to gain their cookies
function selectPokemon(selectedItem) {
    Cookies.set("selectedPokemon", selectedItem);
}
function pokemonSetUp(selectedPokemon, num) {
    Cookies.set("selectedPokemon", selectedPokemon);
    Cookies.set("pokemonDefaultHp", num);
    Cookies.set("pokemonCurrentHp", num);
}

function enemySetUp(enemyPokemon, number) {
    Cookies.set("enemyPokemon", enemyPokemon);
    Cookies.set("enemyDefaultHp", number);
    Cookies.set("enemyCurrentHp", number);
}

// these are variables for the pokemon cards
var selectedSqurtle = document.getElementById(`squirtleCard`);
var selectedBulbasaur = document.getElementById(`bulbasaurCard`);
var selectedCloud = document.getElementById(`fFCard`);

// this block of code give the cards thier cookies when user clicks on said card
selectedSqurtle.onclick = function() {pokemonSetUp(`squrtle`, 110); enemySetUp(`charmander`, 125);};
selectedBulbasaur.onclick = function() {pokemonSetUp(`bulbasaur`, 100); enemySetUp(`charmander`, 125);};
selectedCloud.onclick = function() {pokemonSetUp(`cloud`, 150); enemySetUp(`charmander`, 125);};
// note: glad I made this instead of cheating with HTML
