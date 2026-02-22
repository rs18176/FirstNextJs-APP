import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Create Apollo Client instance
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // GraphQL API URL
    // headers: {
    //   Authorization: process.env.NEXT_PUBLIC_GRAPHQL_TOKEN
    //     ? `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_TOKEN}`
    //     : "",
    // },
  }),
  cache: new InMemoryCache(),
});

export default client;
