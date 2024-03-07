// Poke Body
let pokeBody = document.querySelector("body");
// pokeBody.style.backgroundColor = "black";

// Poke Nav
let pokeNav = document.getElementsByClassName("nav");

// Poke Search Bar Elements
const pokeSearchInput = document.getElementById("poke-search-input");
console.log(pokeSearchInput);
const datalistOptions = document.getElementById("datalistOptions");
// const options = datalistOptions.options;
// console.log(options);

// Pokemon API Url
const pokemonUrl = `https://pokeapi.co/api/v2/`;

// Total Pokemons
let availablePokemon;

const allPokemons = async () => {
  const pokeResponse = await fetch(`${pokemonUrl}pokemon`);
  //   console.log(pokeResponse);
  const pokeData = await pokeResponse.json();
  //   console.log(pokeData);
  availablePokemon = pokeData.count;
};

allPokemons().then(() => {
  availablePokemon;
  catchPokemons();
});

const catchPokemons = async () => {
  for (let i = 1; i <= availablePokemon; i++) {
    try {
      let pokeResponse;

      if (i > 1025) {
        pokeResponse = await fetch(`${pokemonUrl}pokemon/${i + 8975}`);
      } else {
        pokeResponse = await fetch(`${pokemonUrl}pokemon/${i}`);
      }

      const pokeData = await pokeResponse.json();
      //   console.log(`${pokeData.name} ${i}`);
      const pokemonName = pokeData.name;

      //   console.log(pokemons);
      const options = document.createElement("option");
      options.value =
        pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      datalistOptions.appendChild(options);
      console.log(options);
    } catch (error) {
      console.log(error);
    }
  }
};
