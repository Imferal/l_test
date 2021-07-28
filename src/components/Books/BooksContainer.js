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
    this.props.setFetchingStatus(true)
    axios.get('https://fosius-books.herokuapp.com/')
      .then(response => {
        // props.setBooks(response)
        console.log(response)
        debugger
        // this.props.setFetchingStatus(false)

      })
      .catch((error) => {
        debugger
        // Error 😨
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
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