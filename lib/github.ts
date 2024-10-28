import { gql } from "@apollo/client";

export const PINNED_REPOS_QUERY = gql`
  query GetPinnedRepos {
    user(login: "shanedle") {
      pinnedItems(first: 6, types: REPOSITORY) {
        edges {
          node {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              repositoryTopics(first: 5) {
                edges {
                  node {
                    id
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
