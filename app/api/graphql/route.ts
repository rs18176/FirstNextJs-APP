import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import prisma from '@/lib/prisma';
import { typeDefs } from './schema';
import { resolvers } from './resolver';

export type Context = {
  prisma: typeof prisma;
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