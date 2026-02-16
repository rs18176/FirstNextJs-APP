import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import prisma from '@/lib/prisma';

export type Context = {
  prisma: typeof prisma;
};

const typeDefs = `#graphql
  type user {
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
      username: String!,
      password: String!,
      restaurantName: String!,
      city: String!,
      address: String!
    ): user!
  }
`;

const resolvers = {
  Query: {
    getUser: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.create({
        data: { ...args },
      });
    },
  },
};

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    return { req, res, prisma };
  },
});

export const GET = handler;
export const POST = handler;