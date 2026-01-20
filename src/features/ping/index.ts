import { QueryResolvers } from '../../graphql/types'
import { hasToken } from '../../graphql/guards'

export const ping: QueryResolvers['ping'] = () => 'pong'

export const guard = {
  'Query.ping': [hasToken()],
}
