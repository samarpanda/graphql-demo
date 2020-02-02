1. GraphQL server setup
    - `git checkout server`
    - Apollo graphQL server Setup

1. React client setup
    - `git checkout step-01`

1. Apollo client setup & API Query
    - `git checkout step-02`
    - Fetch data from external graphQL [API](https://rickandmortyapi.com/graphql)
    - Apollo chrome extension 
    - Show what apolo cache contains 

1. Apollo client & hooks
    - `git checkout step-03`
    - Apollo provider wrapped around APP Component
    - Apollo chrome externsion configured by passing `"connectToDevTools": true` to ApolloClient
    - Use Apollo externsion to figure out the query needed to fetch data

1. Querying Data 
    - `git checkout step-04`
    - Use `useQuery` method from `apollo/react-hook` to run query
    - Show [useQuery](https://www.apollographql.com/docs/tutorial/queries/) from apollo docs
    - Add some dummy data to show the Pet list items

1. Mutation 
    - `git checkout step-05`
    - Use variables to pass input data
    - Use `useMutation` hook to create a new pet

1. Keeping Cache in Sync
    - `git checkout step-06`
    - Refetching matching queries after a mutation 
    - Use [update](https://www.apollographql.com/docs/react/data/mutations/) method on mutation 
    - Watch queries
    - Don't need refresh to see the latest created item

1. Optimistic UI updates
    - `git checkout step-07`
    - Introduce a delay in client using `ApolloLink.from` & SetTimeout
    - Start an OptimisticResponse within createPet

1. Client Side Schema 
    - `git checkout step-08`
    - How to manage local state with Apollo & GraphQL using client side schemas. By adding a directive.
    - Verify with a console.log to see the age property in the user data







