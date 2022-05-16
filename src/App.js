import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('char');

  async function load() {
    const data = await getPokemons(query);

    console.log(data.results);
    setPokemons(data.results);
  }
  
  useEffect(() => {
    
    load();    
  }, []); //eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();

    load();
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input onChange={e => setQuery(e.target.value)}/>
        <button>Search</button>
      </form>
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
