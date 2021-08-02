import { BookType } from "../../types/types";
import axios from "axios";
import { connect } from "react-redux";
import { apiErr, baseURL } from "../../helpers/api";
import { setBooks, setBooksFetchingStatus, setPageLimit } from "../../redux/booksReducer";
import Books from "./Books";
import { AppStateType } from "../../redux/state";

type Props = {
  books: Array<BookType> | null
  isBooksFetching: boolean
  activePage: number
  pageLimit: number
  setBooks: (books: Array<BookType>) => void
  setPageLimit: (pageLimit: number) => void
  setBooksFetchingStatus: (isBooksFetching: boolean) => void
}

const BooksContainer = (props: Props) => {
  // Загружаем книги с сервера
  const getBooks = () => {
    props.setBooksFetchingStatus(true);
    axios.get(`${baseURL}books`)
      .then(response => {
        props.setBooks(response.data);
        props.setBooksFetchingStatus(false);
      })
      .catch((error) => apiErr(error));
  }

  // Если нажата кнопка "Удалить"
  const deleteBook = (id: number) => {
    axios.delete(`${baseURL}books/${id}`).then(() => getBooks())
      .catch((error) => apiErr(error));
  }

  if (props.books === null && props.isBooksFetching === false) getBooks()

  return (<Books deleteBook={deleteBook} {...props} />)
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isBooksFetching: state.books.isBooksFetching,
    books: state.books.books,
    pageLimit: state.books.pageLimit,
    activePage: state.books.activePage,
  }
}

export default connect(mapStateToProps, { setBooks, setBooksFetchingStatus, setPageLimit })(BooksContainer)