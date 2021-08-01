import { setActivePage } from './../../redux/booksReducer';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/state';


const mapStateToProps = (state: AppStateType) => {
  return {
    books: state.books.books,
    pageLimit: state.books.pageLimit,
    activePage: state.books.activePage,
  }
}

export default connect(mapStateToProps, { setActivePage })(Pagination)