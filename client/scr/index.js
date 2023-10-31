const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, () => {
  console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
});
