import React from 'react';

type Pokemon = {
  number: string;
  name: string;
};

type PokemonListProps = {
  pokedex: Pokemon[];
};

const PokemonList = ({ pokedex }: PokemonListProps) => {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

const pokedex: Pokemon[] = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

const App = () => {
  return (
    <div>
      <h1>Pokémon List</h1>
      <PokemonList pokedex={pokedex} />
    </div>
  );
};

export default App;
