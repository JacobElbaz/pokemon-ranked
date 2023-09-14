import { getRandomPokemon } from "@/lib/pokemonAPI";
import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonBattle() {
  const [pokemonObjectA, setPokemonObjectA] = React.useState();
  const [pokemonObjectB, setPokemonObjectB] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const pokemonObjectA = await getRandomPokemon();
      const pokemonObjectB = await getRandomPokemon();
      setPokemonObjectA(pokemonObjectA);
      setPokemonObjectB(pokemonObjectB);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="pokemon-battle">
      <PokemonCard pokemon={pokemonObjectA} loading={loading}/>
      <PokemonCard pokemon={pokemonObjectB} loading={loading}/>
    </div>
  );
}

export default PokemonBattle;
