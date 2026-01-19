import Fastify, { FastifyInstance, FastifyListenOptions } from 'fastify'
import fastifyApollo from '@as-integrations/fastify'
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'

import { createApolloServer, getContext } from '../graphql'
import { config } from './config'

export const createFastifyServer = async () => {
  const server: FastifyInstance = Fastify({
    genReqId: () => String(process.hrtime.bigint()),
    disableRequestLogging: config.logger.disableRequestLogging,
    logger: { level: config.logger.level },
  })

  const options: FastifyListenOptions = {
    port: config.port,
    host: '0.0.0.0',
  }

  server.register(helmet, {
    global: true,
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })

  server.register(cors, {
    origin: false,
  })

  server.get('/', async () => {
    return 'Ok'
  })

  const apollo = await createApolloServer(server)
  await server.register(fastifyApollo(apollo), { context: getContext })

  server.setErrorHandler((error, request, reply) => {
    request.log.error(error)
    reply.status(500).send({ error: `Something went wrong (${request.id})` })
  })

  server.listen(options, (err) => {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
  })

  return server
}
