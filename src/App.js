import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function load() {
      const rawResponse = await fetch('https://pokedex-alchemy.herokuapp.com/');
      const data = await rawResponse.json(); 
      
      setPokemons(data);
    }

    load();
  });



  return (
    <div className="App">

    </div>
  );
}

export default App;
