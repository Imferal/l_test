import { AppStateType } from '../../redux/state';
import { BookType, GenreType } from '../../types/types';
import { connect } from "react-redux"
import { setBooks, setBooksFetchingStatus } from "../../redux/booksReducer";
import BookFilter from './BookFilter';

type Props = {
  genres: Array<GenreType> | null
  setBooks: (books: Array<BookType>) => void
  setBooksFetchingStatus: (isBooksFetching: boolean) => void
}

const BookFilterContainer = (props: Props) => {
  return <BookFilter {...props} />
}

const mapStateToProps = (state: AppStateType) => {
  return {
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps, { setBooks, setBooksFetchingStatus })(BookFilterContainer)