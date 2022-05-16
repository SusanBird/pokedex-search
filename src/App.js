import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('char');

  async function load() {
    const data = await getPokemons(query);

    setPokemons(data);
  }
  
  useEffect(() => {
    
    load();    
  }, []); //eslint-disable-line

  return (
    <div className="App">
      <header className='App-header'>
        {pokemons.map(({ pokemon, attack, defense, url_image }, i) => <div key={pokemon.pokemon + i}>
          <p>name: {pokemon}</p>
          <p>attack: {attack}</p>
          <p>defense: {defense}</p>
          <img src={url_image} />
        </div>
        )}
      </header>

    </div>
  );
}

export default App;
