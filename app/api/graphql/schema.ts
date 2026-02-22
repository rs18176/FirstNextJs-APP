export const typeDefs = `#graphql
  type user {
       id: String
       username: String!
       password: String!
       restaurantName: String!
       city: String!
       address: String!
  }

  input CreateUserInput {
       id: String
       username: String!
       password: String!
       restaurantName: String!
       city: String!
       address: String!
  }

  type Query {
    getUser: [user]
  }

  type Mutation {
    createUser(
      input: CreateUserInput
    ): user
  }`;