import PokemonBattle from "@/components/PokemonBattle";
import { getPokemonVotesCount } from "@/src/graphql/queries";
import { API } from "aws-amplify";
import Head from "next/head";
import React from "react";

export default function Home() {
  const [votes, setVotes] = React.useState([]);

  const updateVotes = async () => {
    const runFunction = "runFunction";
    const runFunctionStringified = JSON.stringify(runFunction);
    try {
      const response = await API.graphql({
        query: getPokemonVotesCount,
        authMode: "AWS_IAM",
        variables: {
          input: runFunctionStringified,
        },
      });
      console.log("response", response);
    } catch (error) {
      console.log("error getting the data", error);
    }
  };

  React.useEffect(() => {
    updateVotes();
  }, []);

  return (
    <>
      <Head>
        <title>Pokemon Ranked</title>
        <meta name="description" content="Ranking platform for Pokemons." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Pokemon Ranked !</h1>
        <PokemonBattle />
        <ul>
          {votes.map((element) => (
            <li key={element.id}>{element.pokemon_name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
