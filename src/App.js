import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Bookcase from './Bookcase'

export default class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(err => console.error(err))
  }
  updateBookStatus = (book, shelf) => {
    this.setState(state => ({
      books: [
        ...state.books.filter(b => b.id !== book.id),
        {
          ...state.books.find(b => b.id === book.id),
          ...{ shelf }
        }
      ]
    }))

    BooksAPI.update(book, shelf)
      .catch(err => console.error(err))
  }
  addBook = (book, shelf) => {
    this.setState(state => ({
      books: state.books.concat({...book, ...{ shelf }})
    }))
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <Search onSelect={(book, shelf) => {
            this.addBook(book, shelf)
            history.push('/')
          }} />
        )}/>
        <Route exact path='/' render={() => (
          <Bookcase books={this.state.books} onSelect={this.updateBookStatus} />
        )}/>
      </div>
    )
  }
}
