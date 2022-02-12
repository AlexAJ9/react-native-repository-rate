import { gql } from "@apollo/client";
export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          ownerAvatarUrl
          reviewCount
          stargazersCount
          ratingAverage
          forksCount
        }
      }
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      url
      fullName
      description
      language
      ownerAvatarUrl
      reviewCount
      stargazersCount
      ratingAverage
      forksCount
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const IS_USER_AUTHENTICATED = gql`
  query {
    me {
      id
      username
    }
  }
`;
