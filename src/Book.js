import React, { Component } from 'react'

export default class Book extends Component {

  state = {
    value: 'unselected'
  }

  handleChange = value => {
    this.setState({ value })
    this.props.onSelect({id: this.props.id}, value)
  }
  render() {
    const { author, cover, title } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,            
              backgroundImage: `url(${cover})`
            }}></div>
            <div className="book-shelf-changer">
              <select value={this.state.value} onChange={({ target }) => this.handleChange(target.value)}>
                <option value="unselected" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
}
