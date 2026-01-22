import BooksData from '../../.data/books.json' with {type: 'json'}
import { Author } from '../graphql/types'

export const booksByYear = (year?: number | null) =>
  year
    ? BooksData.filter(_ => _.year === year)
    : BooksData

export const booksByAuthor = (author: Author) =>
  BooksData.filter(_ => _.authorId === author.id)
