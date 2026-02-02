import { describe, it, expect } from 'vitest'
import { booksByYear, booksByAuthor } from './book'
import BooksData from '../../.data/books.json'
import { Author } from '../graphql/types'

describe('book repository', () => {
  describe('booksByYear', () => {
    it('should return all books if year is not provided', () => {
      const result = booksByYear()
      expect(result).toEqual(BooksData)
    })

    it('should return books for a specific year', () => {
      const result = booksByYear(2008)
      const expected = [
        { id: 1, authorId: 1, title: 'Clean Code', year: 2008 },
        { id: 18, authorId: 8, title: 'Pragmatic Thinking and Learning', year: 2008 },
      ]
      expect(result).toEqual(expected)
    })

    it('should return an empty array if no books are found for a given year', () => {
      const result = booksByYear(1900)
      expect(result).toEqual([])
    })
  })

  describe('booksByAuthor', () => {
    it('should return all books for a given author', () => {
      const author: Author = { id: 1, name: 'Robert C. Martin' }
      const result = booksByAuthor(author)
      const expected = [
        { id: 1, authorId: 1, title: 'Clean Code', year: 2008 },
        { id: 2, authorId: 1, title: 'Clean Architecture', year: 2017 },
        { id: 3, authorId: 1, title: 'The Clean Coder', year: 2011 },
      ]
      expect(result).toEqual(expected)
    })

    it('should return an empty array if the author has no books', () => {
      const author: Author = { id: 999, name: 'Author without books' }
      const result = booksByAuthor(author)
      expect(result).toEqual([])
    })
  })
})
