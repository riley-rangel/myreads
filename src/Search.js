import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

 const Search = ({books, query, onSearch, onSelect}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={({ target }) => onSearch(target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map(book => {
            return <Book
              key={book.id}
              book={book}
              onSelect={onSelect}
            />
          })}
        </ol>
      </div>
    </div>
  )
}

export default Search
