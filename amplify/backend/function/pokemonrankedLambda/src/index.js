/* Amplify Params - DO NOT EDIT
	API_POKEMONRANKED_GRAPHQLAPIIDOUTPUT
	API_POKEMONRANKED_USERTABLE_ARN
	API_POKEMONRANKED_USERTABLE_NAME
	API_POKEMONRANKED_VOTETABLE_ARN
	API_POKEMONRANKED_VOTETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */ const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    const params = {
      TableName: "VoteTable",
    };

    const scanResults = [];
    let items;

    do {
      items = await dynamodb.scan(params).promise();
      console.log('items from scan VoteTable', items.Items);
      items.Items.forEach((item) => {
        scanResults.push(item);
      });
      params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");

    const voteCountByPokemon = {};

    console.log('scanResult', scanResults);
    scanResults.forEach((item) => {
      const pokemonName = item.pokemon_name;
      const pokemonId = item.pokemon_id;

      if (voteCountByPokemon[pokemonName]) {
        voteCountByPokemon[pokemonName]++;
      } else {
        voteCountByPokemon[pokemonName] = 1;
      }
    });

    console.log('result', result);
    const result = Object.keys(voteCountByPokemon).map((pokemonName) => ({
      pokemon_id: scanResults.find((item) => item.pokemon_name === pokemonName)
        .pokemon_id,
      pokemon_name: pokemonName,
      vote_count: voteCountByPokemon[pokemonName],
    }));

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
