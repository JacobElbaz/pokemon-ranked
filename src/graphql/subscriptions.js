/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
    onCreateVote(filter: $filter) {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
    onUpdateVote(filter: $filter) {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
    onDeleteVote(filter: $filter) {
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
