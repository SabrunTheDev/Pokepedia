const pokeHead = document.querySelector("head");
console.log(pokeHead);
const insertPokepediaBall = document.createElement("link");
insertPokepediaBall.rel = "icon";
insertPokepediaBall.type = "image/x-icon";
insertPokepediaBall.href = "./assets/pokepedia-ball.png";
pokeHead.appendChild(insertPokepediaBall);

const bodyPokepedia = document.querySelector("body");
bodyPokepedia.className = "text-bg-dark p-3";

const refreshPokepedia = document.querySelector("#refresh-button");
console.log(refreshPokepedia);

refreshPokepedia.addEventListener("click", async (event) => {
  location.reload();
});
