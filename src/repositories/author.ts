import AuthorsData from '../../.data/authors.json' with { type: 'json' }
import { Author, Book } from '../graphql/types'

export const authors = () =>
  AuthorsData as Author[]

export const authorById = (id: number) =>
  AuthorsData.find(_ => _.id === id) ?? null

export const authorByBook = (book: Book) =>
  AuthorsData.find(_ => _.id === book.authorId) as Author ?? null
