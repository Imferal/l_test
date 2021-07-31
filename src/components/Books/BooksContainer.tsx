import { BookType } from "../../types/types";
import axios from "axios";
import { connect } from "react-redux";
import { apiErr, baseURL } from "../../api/api";
import { setBooks, setBooksFetchingStatus } from "../../redux/authReducer";
import Books from "./Books";
import { AppStateType } from "../../redux/state";

type Props = {
  books: Array<BookType> | null
  isBooksFetching: boolean
  setBooks: (books: Array<BookType>) => void
  setBooksFetchingStatus: (isBooksFetching: boolean) => void
}

const BooksContainer = function (props: Props) {
  const getBooks = () => {

    props.setBooksFetchingStatus(true);
    axios.get(`${baseURL}books`)
      .then(response => {
        props.setBooks(response.data);
        props.setBooksFetchingStatus(false);
      })
      .catch((error) => apiErr(error));
  }

  const deleteBook = (id: number) => {
    axios.delete(`${baseURL}books/${id}`).then(() => getBooks())
      .catch((error) => apiErr(error));
  }

  if (props.books === null && props.isBooksFetching === false) getBooks()

  return (<Books deleteBook={deleteBook} {...props} />)
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isBooksFetching: state.auth.isBooksFetching,
    books: state.auth.books
  }
}

export default connect(mapStateToProps, { setBooks, setBooksFetchingStatus })(BooksContainer)