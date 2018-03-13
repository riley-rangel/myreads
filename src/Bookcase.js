import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

export default class Bookcase extends Component {
  state = {
    shelves: [
      {
        id: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        id: 'wantToRead',
        title: 'Want to Read'
      },
      {
        id: 'read',
        title: 'Read'
      }
    ]
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => {
              return <Shelf
                key={shelf.id}
                title={shelf.title}
                books={this.props.books.filter(book => book.shelf === shelf.id)}
                onSelect={this.props.onSelect}
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
}
