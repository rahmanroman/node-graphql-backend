import { ApolloServer } from '@apollo/server'
import { FastifyInstance } from 'fastify'
import { fastifyApolloDrainPlugin } from '@as-integrations/fastify'
import { DocumentNode } from 'graphql/language'
import { loadFiles } from '@graphql-tools/load-files'

import resolvers from './resolvers'
import { Context } from './context'

export const createApolloServer = async (fastify: FastifyInstance) => {
  const typeDefs: DocumentNode[] = await loadFiles('./src/**/*.schema.graphql')

  const apollo = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    plugins: [fastifyApolloDrainPlugin(fastify)],
  })

  await apollo.start()

  return apollo
}
