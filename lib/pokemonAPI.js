const POKEMON_API = "https://pokeapi.co/api/v2/";

function getRandomInteger() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
  
    if (randomNumber < 0.5) {
      // If randomNumber is less than 0.5, choose the first range
      // Random integer between 1 (inclusive) and 1011 (exclusive)
      return Math.floor(Math.random() * 1010) + 1;
    } else {
      // If randomNumber is greater than or equal to 0.5, choose the second range
      // Random integer between 10001 (inclusive) and 10272 (exclusive)
      return Math.floor(Math.random() * 271) + 10001;
    }
  }
  

// getRandomPokemon => Get a random pokemon
export async function getRandomPokemon() {
    const randomId = getRandomInteger();
    const response = await fetch(POKEMON_API + "pokemon/" + randomId);
    const data = await response.json();
    return data;
}