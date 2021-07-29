import axios from "axios";
import React from "react";
// import { useEffect } from "react";
// import { BookType } from "../../types/types";
import { connect } from "react-redux";
import { setBooks, setFetchingStatus } from "../../redux/authReducer";
import Books from "./Books";

// type Props = {
//   books: Array<BookType>
//   setBooks: (books: Array<BookType>) => void
// }

class BooksContainer extends React.Component {

  getBooks() {
    if (this.props.books === null) {
      this.props.setFetchingStatus(true)
      axios.get('https://cors-anywhere.herokuapp.com/https://fosius-books.herokuapp.com/books')
        .then(response => {
          this.props.setBooks(response.data)
          this.props.setFetchingStatus(false)

        })
        .catch((error) => {
          // Что-то пошло не так 😨
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
          debugger
        });
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  render() {
    return (
      <>
        <Books books={this.props.books} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    books: state.auth.books
  }
}

export default connect(mapStateToProps, { setBooks, setFetchingStatus })(BooksContainer)