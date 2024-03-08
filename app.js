// Poke Body
let pokeBody = document.querySelector("body");
// pokeBody.style.backgroundColor = "black";

// Poke Nav
let pokeNav = document.getElementsByClassName("nav");

// Poke Search Bar Elements
const pokeSearchInput = document.getElementById("poke-search-input");
console.log(pokeSearchInput);
const datalistOptions = document.getElementById("datalistOptions");

// Poke Dispaly
const singlePokemonDislay = document.getElementById("single-display");
const singlePokemonImageDisplay = document.getElementById(
  "single-display-image"
);
const singlePokemonDislayPara = document.querySelector(".lead");
singlePokemonDislayPara.id = "species-paragraph";

// const options = datalistOptions.options;
// console.log(options);

// Pokemon API Url
const pokemonUrl = `https://pokeapi.co/api/v2/`;

// Total Pokemons
let availablePokemon;

const allPokemons = async () => {
  const pokeResponse = await fetch(`${pokemonUrl}pokemon`);
  if (!pokeResponse.ok) {
    throw new Error("Failed to fetch Pokemon");
  }
  //   console.log(pokeResponse);
  const pokeData = await pokeResponse.json();
  //   console.log(pokeData);
  availablePokemon = pokeData.count;
};

allPokemons().then(() => {
  availablePokemon;
  catchPokemons();
});

const pokemonNameGlobal = [];

const catchPokemons = async () => {
  for (let i = 1; i <= availablePokemon; i++) {
    try {
      let pokeResponse;

      if (i > 1025) {
        pokeResponse = await fetch(`${pokemonUrl}pokemon/${i + 8975}`);
        if (!pokeResponse.ok) {
          throw new Error("Failed to fetch Pokemon");
        }
      } else {
        pokeResponse = await fetch(`${pokemonUrl}pokemon/${i}`);
        if (!pokeResponse.ok) {
          throw new Error("Failed to fetch Pokemon");
        }
      }

      const pokeData = await pokeResponse.json();
      //   console.log(`${pokeData.name} ${i}`);
      const pokemonName = pokeData.name;
      pokemonNameGlobal.push(pokemonName);

      //   console.log(pokemons);
      const options = document.createElement("option");
      options.value =
        pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      datalistOptions.appendChild(options);
      // console.log(options);
    } catch (error) {
      console.log(error);
    }
  }
};

pokeSearchInput.addEventListener("keypress", async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    try {
      const pokeEntered = pokeSearchInput.value.toLowerCase();
      const pokemonNamesLowercase = pokemonNameGlobal.map((name) =>
        name.toLowerCase()
      );

      pokemonNamesLowercase.forEach((name, index) => {
        if (pokeEntered == name) {
          name = name.charAt(0).toUpperCase() + name.slice(1);
          if (name.includes("-")) {
            name = name
              .split("-")
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join(" ");
          }
          console.log(`${name} # ${index}`);
          singlePokemonDislay.innerHTML = name;
          singlePokemonImageDisplay.innerHTML = "";
          const pokemonDisplayImg = document.createElement("img");
          if (index > 1025) {
            pokemonDisplayImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 8976
            }.png`;
          } else {
            pokemonDisplayImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`;
          }
          pokemonDisplayImg.style.height = "500px";
          pokemonDisplayImg.style.width = "500px";
          pokemonDisplayImg.className = "d-block mx-lg-auto img-fluid";
          pokemonDisplayImg.style.padding = "10px";
          singlePokemonImageDisplay.appendChild(pokemonDisplayImg);

          const fetchPokemonData = async () => {
            if (index > 1025) {
              pokeResponse = await fetch(
                `${pokemonUrl}pokemon/${index + 8976}`
              );
            } else {
              pokeResponse = await fetch(`${pokemonUrl}pokemon/${index + 1}`);
            }

            if (!pokeResponse.ok) {
              throw new Error("Failed to fetch Pokemon");
            }

            //   console.log(pokeResponse);
            const pokeData = await pokeResponse.json();
            console.log(pokeData);
          };

          fetchPokemonData();

          const nameOriginal = name
            .split(" ")
            .map((part) => part.toLowerCase());
          console.log(nameOriginal);

          const fetchPokemonSpeciesData = async () => {
            const pokeSpeciesResponse = await fetch(
              `${pokemonUrl}pokemon-species/${nameOriginal[0]}`
            );
            if (!pokeSpeciesResponse.ok) {
              throw new Error("Failed to fetch Pokemon");
            }
            const pokeSpeciesData = await pokeSpeciesResponse.json();
            console.log(pokeSpeciesData);
            const pokeFormText = pokeSpeciesData.flavor_text_entries;
            console.log(pokeFormText[1].language.name);

            let englishTextFound = false;

            pokeFormText.forEach((text, index) => {
              const isItEnglish = pokeFormText.filter(
                (text) => text.language.name == "en"
              );

              if (isItEnglish.length > 0 && !englishTextFound) {
                const randomText = Math.floor(
                  Math.random() * isItEnglish.length
                );
                randomSelectedText = isItEnglish[randomText];
                console.log(randomSelectedText);

                if (randomSelectedText.flavor_text.includes("\f")) {
                  singlePokemonDislayPara.innerHTML =
                    randomSelectedText.flavor_text =
                      randomSelectedText.flavor_text.split("\f").join(" ");
                } else {
                  singlePokemonDislayPara.innerHTML =
                    randomSelectedText.flavor_text;
                }

                englishTextFound = true;
              }
            });
          };

          fetchPokemonSpeciesData();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
});
