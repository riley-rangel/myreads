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

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search />
        )}/>
        <Route exact path='/' render={() => (
          <Bookcase books={this.state.books} />
        )}/>
      </div>
    )
  }
}
