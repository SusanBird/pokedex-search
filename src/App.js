import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function load() {
      const rawResponse = await fetch('https://pokedex-alchemy.herokuapp.com/');
      const data = await rawResponse.json(); 
      
      console.log(data);
      setPokemons(data);
    }

    load();
  }, []);

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
