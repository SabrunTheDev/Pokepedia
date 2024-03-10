const pokeHead = document.querySelector("head");
console.log(pokeHead);
const insertPokepediaBall = document.createElement("link");
insertPokepediaBall.rel = "icon";
insertPokepediaBall.type = "image/x-icon";
insertPokepediaBall.href = "./assets/pokepedia-ball.png";
pokeHead.appendChild(insertPokepediaBall);
