import { Author, Book, QueryResolvers } from '../../graphql/types'
import * as BookRepo from '../../repositories/book'

export const books: QueryResolvers['books'] = (parent, { year }) =>
  BookRepo.booksByYear(year) as Book[]

export const booksByAuthor = (parent: Author) =>
  BookRepo.booksByAuthor(parent) as Book[]
