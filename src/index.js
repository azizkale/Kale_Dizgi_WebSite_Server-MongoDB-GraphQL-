const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./schema/resolvers");
const typeDefs = require("./schema/typeDefs");

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: 4002 });
