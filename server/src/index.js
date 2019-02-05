require('isomorphic-fetch');
require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const express = require('express');
const path = require('path');

// const typeDefs = `
// type Query {
//   info: String!
// }
// `

const resolvers = {
  Query
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

// serve static files
server.express.use(express.static(path.join(__dirname, "/../../client/build")));
// serve other routes to index
server.express.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../../client/build/index.html"));
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
