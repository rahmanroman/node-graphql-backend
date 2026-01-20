import { GraphQLError, GraphQLFieldResolver, GraphQLResolveInfo } from 'graphql'
import { ResolversComposition } from '@graphql-tools/resolvers-composition'

import { type Context } from './context'

export type Guard = ResolversComposition<GraphQLFieldResolver<unknown, Context>>

export const hasToken = (): Guard => next => (
  root: unknown,
  args: object,
  context: Context,
  info: GraphQLResolveInfo,
) => {
  if (!context.token) throw new GraphQLError('Unauthorized')
  return next(root, args, context, info)
}
