import { ApolloServer } from '@apollo/server'
import { FastifyInstance } from 'fastify'
import { ApolloFastifyContextFunction, fastifyApolloDrainPlugin } from '@as-integrations/fastify'
import { DocumentNode } from 'graphql/language'
import { loadFiles } from '@graphql-tools/load-files'

import resolvers from '../features'

export interface Context {
  token: string | null
}

export const getContext: ApolloFastifyContextFunction<Context> = async () => ({ token: null })

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
