import { composeResolvers } from '@graphql-tools/resolvers-composition'

import * as Ping from '../features/ping'

export default composeResolvers({
  Query: {
    ping: Ping.ping,
  },
}, {
  ...Ping.guard,
})
