import React from "react";

import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends React.Component {
  state = {
    searchBooks: [],
    query: "",
    noData: false,
    emptyText: false
  };
  
  onChangeHandle = async c => {
    await this.setState({
      query: c.target.value
    });
    if (this.state.query === "") {
      this.setState({
        searchBooks: []
      });
      return;
    }
    this.onSubmit();
  };
  
  onSubmit = (c) => {
    BooksAPI.search(this.state.query).then(Books => {
      if (
        Books !== undefined &&
        Books.error !== "empty query" &&
        this.state.query !== ""
      ) {
        this.setState({
          searchBooks: Books,
          noData: false,
          emptyText: false
        });
      } else {
        this.setState({
          searchBooks: [],
          noData: true,
          emptyText: false
        });
      }
    });
  };

  render() {
    const { books, shelfChange } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={this.props.return}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type=""
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onChangeHandle}
            />
          </div>
        </div>

        <div className="search-books-results" />
        {this.state.noData ? (
          this.state.emptyText ? (
            <div>Type Something First !</div>
          ) : (
            <div>unavailable :(</div>
          )
        ) : (
          <ol className="books-grid">
            {this.state.searchBooks.map(book => (
              <Book
                book={book}
                key={book.id}
                shelfChange={shelfChange}
                books={books}
              />
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default Search;
