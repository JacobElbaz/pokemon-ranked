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
      {!loading && (
        <>
          <PokemonCard pokemon={pokemonObjectA}/>
          <PokemonCard pokemon={pokemonObjectB}/>
        </>
      )}
    </div>
  );
}

export default PokemonBattle;
