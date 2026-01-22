import { composeResolvers } from '@graphql-tools/resolvers-composition'

import * as PingFeature from '../features/ping'
import * as AuthorFeature from '../features/author'
import * as BookFeature from '../features/book'

export default composeResolvers({
  Query: {
    ping: PingFeature.ping,
    authors: AuthorFeature.authors,
    author: AuthorFeature.author,
    books: BookFeature.books,
  },
  Author: {
    books: BookFeature.booksByAuthor,
  },
  Book: {
    author: AuthorFeature.authorByBook,
  },
}, {
  ...PingFeature.guard,
})
