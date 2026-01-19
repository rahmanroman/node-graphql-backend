import { composeResolvers } from '@graphql-tools/resolvers-composition'

import { ping } from './ping'

export default composeResolvers({
  Query: {
    ping,
  },
})
