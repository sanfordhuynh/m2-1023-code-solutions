const api = 'https://pokeapi.co/api/v2/pokemon/1';

fetch(api)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((pokemon) => console.log('pokemon: ', pokemon))
  .catch((error) => console.log('Error: ', error));
