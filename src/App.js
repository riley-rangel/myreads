import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookcase from './Bookcase'

export default class BooksApp extends Component {
  state = {
    books: [],
    query: '',
    results: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(err => console.error(err))
  }
  updateBookShelf = (book, shelf) => {
    this.setState(state => ({
      books: [
        ...state.books.filter(b => b.id !== book.id),
        {
          ...book,
          ...{ shelf }
        }
      ]
    }))

    BooksAPI.update(book, shelf)
      .catch(err => console.error(err))
  }
  updateQuery = query => {
    this.setState({ query })

    if (!query)
      return this.setState({ results: [] })

    BooksAPI.search(query)
      .then(books => {
        if (query !== this.state.query) return

        if (!Array.isArray(books))
          return this.setState({ results: [] })

        this.setState(state => ({
          results: books.map(book => {
            return state.books.find(b => b.id === book.id)
              ? {...state.books.find(b => b.id === book.id)}
              : book
          })
        }))
      })
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.results}
            onSearch={this.updateQuery}
            onSelect={this.updateBookShelf}
            query={this.state.query}
          />
        )}/>
        <Route exact path='/' render={() => (
          <Bookcase books={this.state.books} onSelect={this.updateBookShelf} />
        )}/>
      </div>
    )
  }
}
