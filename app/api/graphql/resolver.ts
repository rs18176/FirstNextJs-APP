import { Context } from "../../api/graphql/route";

export const resolvers = {
  Query: {
    getUser: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_parent: any, args: any, context: Context) => {
      
      console.log("Prisma data:", {
        username: args.input.username,
        password: args.input.password,
        restaurantName: args.input.restaurantName,
        city: args.input.city,
        address: args.input.address,
      });

      return await context.prisma.user.create({
        data: {
          username: args.input.username,
          password: args.input.password,
          restaurantName: args.input.restaurantName,
          city: args.input.city,
          address: args.input.address,
        },

      });
    },
  },
};