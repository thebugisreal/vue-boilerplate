import gql from 'graphql-tag'

export const GET_FIRST_COLLECTION = gql`
  query Collections ($first: Int!) {
    collections (first: $first) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
