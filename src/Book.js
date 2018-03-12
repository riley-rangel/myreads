import React from 'react'

const Book = props => {

  const { author, cover, title } = props

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={cover}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
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

export default Book