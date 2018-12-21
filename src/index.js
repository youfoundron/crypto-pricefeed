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

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    nomics: new NomicsConnector(NOMICS_API_KEY)
  }
})

// Go to http://localhost:4000 to test your API
server.start(() => console.log('Server running on :4000'))
