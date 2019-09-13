import React from "react";
import Option from "./Option";
import BackCover from "./icons/no-image-available.png";

class Book extends React.Component {
  render() {
    const { books, book, shelfChange } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                 
                width: 200,
                height: 200,
                backgroundImage: `url(${
                  book.imageLinks && book.imageLinks.thumbnail
                    ? book.imageLinks.thumbnail
                    : BackCover
                })`
                
              }}
            />
            <Option
              book={book}
              shelfChange={shelfChange}
              books={books}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
