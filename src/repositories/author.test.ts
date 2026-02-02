import { describe, it, expect } from 'vitest'
import { authors, authorById, authorByBook } from './author'
import AuthorsData from '../../.data/authors.json'
import { Book } from '../graphql/types'

describe('author repository', () => {
  describe('authors', () => {
    it('should return all authors', () => {
      const result = authors()
      expect(result).toEqual(AuthorsData)
    })
  })

  describe('authorById', () => {
    it('should return the correct author for a given id', () => {
      const result = authorById(1)
      expect(result).toEqual({ id: 1, name: 'Robert C. Martin' })
    })

    it('should return null if author is not found', () => {
      const result = authorById(999)
      expect(result).toBeNull()
    })
  })

  describe('authorByBook', () => {
    it('should return the author of a given book', () => {
      const book: Book = { id: 1, authorId: 1, title: 'Clean Code', year: 2008 }
      const result = authorByBook(book)
      expect(result).toEqual({ id: 1, name: 'Robert C. Martin' })
    })

    it('should return null if book has no author', () => {
      const book: Book = { id: 99, authorId: 999, title: 'Book without author', year: 2024 }
      const result = authorByBook(book)
      expect(result).toBeNull()
    })
  })
})
