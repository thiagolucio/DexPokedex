const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};

export const getMorePokemons = (offset) => {  
  return fetch(`${URL}/?offset=${offset}&limit=10`).then((response) =>
    response.json()
  );
};