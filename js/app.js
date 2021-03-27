function selectPokemon(selectedItem) {
    Cookies.set("selectedPokemon", selectedItem);
}

var selectedSqurtle = document.getElementById(`squirtleCard`);
var selectedBulbasaur = document.getElementById(`bulbasaurCard`);
var selectedCloud = document.getElementById(`fFCard`);

selectedSqurtle.onclick = function() {selectPokemon(`squrtle`)};
selectedBulbasaur.onclick = function() {selectPokemon(`bulbasaur`)};
selectedCloud.onclick = function() {selectPokemon(`cloud`)};

