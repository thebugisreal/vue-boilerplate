import gql from 'graphql-tag'

export const GET_FIRST_PRODUCT = gql`
  query Products ($first: Int!) {
    products (first: $first) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
