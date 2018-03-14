import React, { Component } from 'react'

export default class Book extends Component {
  state = {
    value: this.props.book.shelf || 'none'
  }

  getThumbnail = imageLinks => {
    return imageLinks
      ? imageLinks.smallThumbnail ? `url(${imageLinks.smallThumbnail})` : ''
      : ''
  }
  getAuthors = authors => {
    return authors && Array.isArray(authors) && authors.length
      ? authors[0]
      : 'No Author Available'
  }
  handleChange = (book, value) => {
    this.setState({ value })
    this.props.onSelect(book, value)
  }
  render() {
    const { book } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: this.getThumbnail(book.imageLinks)
            }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={({ target }) => this.handleChange(book, target.value)}>
                <option value="unselected" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{this.getAuthors(book.authors)}</div>
        </div>
      </li>
    )
  }
}
