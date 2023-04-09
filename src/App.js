import { useEffect } from 'react';
import './App.css';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon();
    }
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;
