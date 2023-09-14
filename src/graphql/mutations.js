/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
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
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
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
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
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
