import axios from "axios";
import React from "react";
// import { useEffect } from "react";
// import { BookType } from "../../types/types";
import { connect } from "react-redux";
import { setGenres, setGenresFetchingStatus } from "../../redux/genreReducer";
import apiErr from "../../_helpers/apiErr";
import AddBook from "./AddBook";

// type Props = {
//   books: Array<BookType>
//   setBooks: (books: Array<BookType>) => void
// }

class AddBookContainer extends React.Component {

  getGenres() {
    this.props.setGenresFetchingStatus(true)
    axios
      .get('https://cors-anywhere.herokuapp.com/https://fosius-books.herokuapp.com/genre', {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
      .then(response => {
        debugger
        this.props.setGenres(response.data)
        this.props.setGenresFetchingStatus(false)
      })
      .catch((error) => {
        apiErr(error)
      });
  }

  componentDidMount() {
    if (this.props.genres === null && this.props.isGenresFetching === false) {
      this.getGenres()
    }
  }

  render() {
    return (
      <AddBook genres={this.props.genres} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isGenresFetching: state.genres.isGenresFetching,
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps, { setGenres, setGenresFetchingStatus })(AddBookContainer)