# Poképedia

Welcome to Poképedia, a web application that allows you to search and learn about various Pokémon!

## Overview

This project utilizes JavaScript to interact with the [PokéAPI](https://pokeapi.co/) to fetch information about Pokémon. It features a user-friendly interface where you can search for Pokémon by name and get detailed information about them, including images and species details.

## Features

- **Pokémon Search:** Use the search bar to find information about your favorite Pokémon.
- **Dynamic Display:** The application dynamically displays the selected Pokémon's image and species details.
- **Random Pokémon Facts:** Learn interesting facts about the Pokémon species through randomly selected flavor text.

## Usage

- Type the name of a Pokémon in the search bar and press Enter to get detailed information.
- Explore different Pokémon species and refresh the page to discover new ones.

## JavaScript Code Summary

1. **Fetching Pokémon Data:**

   - The `allPokemons` function fetches the total count of available Pokémon from the PokéAPI.

2. **Populating Search Bar:**

   - The `catchPokemons` function iterates through each Pokémon, fetches details, and populates the search bar datalist.

3. **Searching for Pokémon:**

   - The `pokeSearch` function listens for Enter key presses in the search bar, matches input with Pokémon names, and triggers data display.

4. **Displaying Pokémon Details:**

   - The `displayPokemonDetails` function dynamically displays the selected Pokémon's name and image.

5. **Fetching Additional Data:**
   - The code includes functions like `fetchPokemonData` and `fetchPokemonSpeciesData` to fetch additional details and species information.

## Contributing

Contributions are welcome! Feel free to open issues, suggest enhancements, or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to the [PokéAPI](https://pokeapi.co/) for providing the Pokémon data.

Happy Pokémon exploring!
