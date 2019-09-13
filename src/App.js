import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList.js';
import Search from './Search'
import {Route} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
      Books : []
    
  }


 
  componentDidMount(){
    BooksAPI.getAll().then((Books) =>{
        this.setState( ({
          Books
        }))
    })
    
  } 
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(c => {
      book.shelf = shelf;
      BooksAPI.getAll().then(Books =>
        this.setState({
          Books
        })
      );
    });
  };

        handleRefresh =  ()  => {
            BooksAPI.getAll((Books) =>{
              this.setState(({
                Books
              }))
            });
        };
  render() {
    return (

        <div className = 'App'>
        <Route
          exact
          path="/"
          render={props => (
            <BooksList
              books={this.state.Books}
              shelfChange={this.changeShelf }
            />
          )}
        />
        <Route
         
          path="/search"
          render={props => (
            <Search
              books={this.state.Books}
              shelfChange={this.changeShelf}
              return={this.handleRefresh}
            />
          )}
        />
      
      </div>
    )
  }
}

export default BooksApp
