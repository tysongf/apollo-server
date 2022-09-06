const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolvers = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
   const app = express();

   const schema = makeExecutableSchema({
      typeDefs: typeDefs,
      resolvers: resolvers,
   });

   const server = new ApolloServer({ schema });

   await server.start();
   server.applyMiddleware({ app, path: "/graphql" });

   app.listen(3000, () => {
      console.log(`Running GraphQL Server on port 3000...`);
   });
}

startApolloServer();
