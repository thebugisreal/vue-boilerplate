import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({
    uri: 'https://giadungnhatban.myshopify.com/api/2021-04/graphql.json',
    headers: {
      'X-Shopify-Storefront-Access-Token': '7fa8e9e07681042df92dcaebc69149bd'
    }
  }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache()
})
