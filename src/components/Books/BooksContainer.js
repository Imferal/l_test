import axios from "axios";
import React from "react";
// import { useEffect } from "react";
// import { BookType } from "../../types/types";
import { connect } from "react-redux";
import { setBooks, setBooksFetchingStatus } from "../../redux/authReducer";
import apiErr from "../../_helpers/apiErr";
import Books from "./Books";

// type Props = {
//   books: Array<BookType>
//   setBooks: (books: Array<BookType>) => void
// }

class BooksContainer extends React.Component {

  getBooks() {
    this.props.setBooksFetchingStatus(true)
    axios.get('https://cors-anywhere.herokuapp.com/https://fosius-books.herokuapp.com/books')
      .then(response => {
        this.props.setBooks(response.data)
        this.props.setBooksFetchingStatus(false)

      })
      .catch((error) => {
        apiErr(error)
      });
  }

  componentDidMount() {
    if (this.props.books === null && this.props.isBooksFetching === false) {
      this.getBooks()
    }
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
    isBooksFetching: state.auth.isBooksFetching,
    books: state.auth.books
  }
}

export default connect(mapStateToProps, { setBooks, setBooksFetchingStatus })(BooksContainer)