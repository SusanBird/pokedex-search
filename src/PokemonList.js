import React from 'react';

export default function PokemonList({ pokemons }) {
  return <div className='pokemon-list'>
    {
      pokemons.map(({ pokemon, attack, defense, url_image }, i) => 
        <div key={pokemon.pokemon + i}>
          <p>name: {pokemon}</p>
          <p>attack: {attack}</p>
          <p>defense: {defense}</p>
          <img src={url_image} />
        </div>
      )}
  </div>;
}
