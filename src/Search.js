import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

export default class Search extends Component {
  state = {
    query: '',
    books: []
  }

  handleChange = query => {
    this.setState({ query })
    this.submitQuery(query)
  }
  submitQuery = query => {
    if (!query) return this.setState({ books: [] })

    BooksAPI.search(query)
      .then(books => {
        return Array.isArray(books)
          ? this.setState({ books })
          : this.setState({ books: [] })
      })
      .catch(err => console.error(err))
  }

  render () {
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
              value={this.state.query}
              onChange={({ target }) => this.handleChange(target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => {
              return <Book
                key={book.id}
                id={book.id}
                author={book.author}
                cover={book.imageLinks.smallThumbnail}
                title={book.title}
              />
            })}
          </ol>
        </div>
      </div>
    )
  }
}
