import { ApolloFastifyContextFunction } from '@as-integrations/fastify'

export interface Context {
  token: string | null
}

export const getContext: ApolloFastifyContextFunction<Context> = async () => ({ token: 'token' })
