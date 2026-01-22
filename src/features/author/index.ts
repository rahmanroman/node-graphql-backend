import { Book, QueryResolvers } from '../../graphql/types'
import * as AuthorRepo from '../../repositories/author'

export const authors: QueryResolvers['authors'] = () =>
  AuthorRepo.authors()

export const author: QueryResolvers['author'] = (parent, { id }) =>
  AuthorRepo.authorById(id)

export const authorByBook = (parent: Book) =>
  AuthorRepo.authorByBook(parent)
