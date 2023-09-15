/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPokemonVotesCount = /* GraphQL */ `
  query GetPokemonVotesCount {
    getPokemonVotesCount {
      pokemon_id
      pokemon_name
      vote_count
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      password
      profile_picture
      votes {
        items {
          id
          pokemon_name
          pokemon_id
          createdAt
          userId
          updatedAt
          userVotesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        profile_picture
        votes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
      id
      pokemon_name
      pokemon_id
      createdAt
      user {
        id
        name
        email
        password
        profile_picture
        votes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      updatedAt
      userVotesId
      __typename
    }
  }
`;
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pokemon_name
        pokemon_id
        createdAt
        user {
          id
          name
          email
          password
          profile_picture
          createdAt
          updatedAt
          __typename
        }
        userId
        updatedAt
        userVotesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
