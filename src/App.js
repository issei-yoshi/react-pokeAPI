import { useEffect, useState } from 'react';
import './App.css';

import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  return (
    <div className="App">
      { loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Success to get PokeDatas</h1>
      )}
    </div>
  );
}

export default App;
