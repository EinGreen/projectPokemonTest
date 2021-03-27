// this fuction allows the cards to gain their cookies
function selectPokemon(selectedItem) {
    Cookies.set("selectedPokemon", selectedItem);
}

// these are variables for the pokemon cards
var selectedSqurtle = document.getElementById(`squirtleCard`);
var selectedBulbasaur = document.getElementById(`bulbasaurCard`);
var selectedCloud = document.getElementById(`fFCard`);

// this block of code give the cards thier cookies when user clicks on said card
selectedSqurtle.onclick = function() {selectPokemon(`squrtle`)};
selectedBulbasaur.onclick = function() {selectPokemon(`bulbasaur`)};
selectedCloud.onclick = function() {selectPokemon(`cloud`)};
// note: glad I made this instead of cheating with HTML

