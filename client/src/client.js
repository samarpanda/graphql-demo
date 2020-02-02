import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

const link = new HttpLink({uri: 'https://rickandmortyapi.com/graphql'})
const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

const query = gql`
  {
    characters {
      results {
        id
        name
      }
    }
  }
`

client.query({query})
  .then(result => {
    // Result of graphQL Query
    console.log(result);

    // GraphQL In Memory Cache
    console.log(cache.data.data);
  })

export default client