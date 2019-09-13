import React from "react";
class Option extends React.Component {
  shelfChanger = (c) => {
    this.props.shelfChange(this.props.book, c.target.value);
  };

  render() {
    const { books, book } = this.props;
    let prevState = "Nothing";
    for (let Book of books) {
      if (Book.id === book.id) {
        prevState = Book.shelf;

        break;
      }
    }
    return (
      <div className="book-shelf-changer">
        <select onChange={this.shelfChanger} defaultValue={prevState}>
          <option value="Nothing" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="Nothing">Nothing</option>
        </select>
      </div>
    );
  }
}

export default Option;
