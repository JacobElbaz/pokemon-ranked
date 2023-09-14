import { createVote } from "@/src/graphql/mutations";
import { API } from "aws-amplify";
import Image from "next/image";
import React from "react";

function PokemonCard({ pokemon, loading }) {
  const createNewVote = async () => {
    const voteDetails = {
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      createdAt: "121212",
      userId: "1",
    };
    try {
      const response = await API.graphql({
        query: createVote,
        authMode: "AWS_IAM",
        variables: {
          input: voteDetails,
        },
      });
      console.log("response create Vote", response);
    } catch (error) {
      console.log("error on create vote", error);
    }
  };

  const handleVote = () => {
    createNewVote();
  };

  return (
    <div className="pokemon-card">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <Image
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt={"Picture of " + pokemon?.name}
            width={200}
            height={200}
          />
          <h2>
            {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
          </h2>
          <button onClick={handleVote}>Vote</button>
        </>
      )}
    </div>
  );
}

export default PokemonCard;
