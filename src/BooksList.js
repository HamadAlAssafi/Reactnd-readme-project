import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
class BooksList extends React.Component{
    
    
    render(){
        const {books , shelfChange} = this.props
      
       
        const read = books.filter((book) => book.shelf ==='read')
        const wantToRead = books.filter((book) => book.shelf ==='wantToRead')
        const currentlyReading = books.filter((book) => book.shelf ==='currentlyReading')

        console.log(books)
      
      
        return(<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map(book => (
                    <Book
                      book={book}
                      key={book.id}
                      shelfChange={shelfChange}
                      books={books}
                    />
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToRead.map(book => (
                    <Book
                      book={book}
                      key={book.id}
                      shelfChange={shelfChange}
                      books={books}
                    />
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map(book => (
                    <Book
                      book={book}
                      key={book.id}
                      shelfChange={shelfChange}
                      books={books}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/Search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
   
        )
    }
}
export default BooksList