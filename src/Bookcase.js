import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import shelves from './shelfConfig'

const Bookcase = ({books, onSelect}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => {
            return <Shelf
              key={shelf.id}
              title={shelf.title}
              books={books.filter(book => book.shelf === shelf.id)}
              onSelect={onSelect}
            />
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>
          Add a book
        </Link>
      </div>
    </div>
  )
}

export default Bookcase