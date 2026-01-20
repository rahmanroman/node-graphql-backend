import { composeResolvers } from '@graphql-tools/resolvers-composition'

import { ping } from '../features/ping'

export default composeResolvers({
  Query: {
    ping,
  },
})
