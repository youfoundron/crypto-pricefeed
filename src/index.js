import { GraphQLServer } from 'graphql-yoga'
import NomicsConnector from './NomicsConnector'

const NOMICS_API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const typeDefs = `
  type Query {
    exchangeRate(currency: String!): Float
  }
`

const resolvers = {
  Query: {
    exchangeRate: (root, variables, context) =>
      context.nomics.getPrice(variables.currency)
  }
}

// Go to http://localhost:4000 to test your API
const playground = process.env.NODE_ENV === 'development'

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  playground,
  context: {
    nomics: new NomicsConnector(NOMICS_API_KEY)
  }
})

server.start(() => console.log('Server running on :4000'))
