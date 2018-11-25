require('isomorphic-fetch')
require('dotenv').config()

const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')

// const typeDefs = `
// type Query {
//   info: String!
// }
// `

const resolvers = {
  Query
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
