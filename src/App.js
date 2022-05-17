import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils';
import Spinner from './Spinner';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('char');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    const data = await getPokemons(query);
    setIsLoading(false);

    // console.log(data.results);
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
        {
          isLoading
            ? <Spinner />
            : <PokemonList pokemons={pokemons} />
        }
      </header>

    </div>
  );
}

export default App;
