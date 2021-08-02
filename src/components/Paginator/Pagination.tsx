import { setActivePage } from '../../redux/booksReducer';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookType } from '../../types/types';
import * as React from 'react';
import { AppStateType } from '../../redux/state';
import { connect } from 'react-redux';

type Props = {
  books: Array<BookType> | null
  pageLimit: number
  activePage: number
  setActivePage: (activePage: number) => void
}

function Paginator(props: Props) {
  let items = [];
  let totalItems: number

  // Получаем общее количество книг
  props.books === null ?
    totalItems = 0 :
    totalItems = props.books.length

  // Получаем общее количество страниц, с учётом лимита на одну страницу
  let totalPages = Math.ceil(totalItems / props.pageLimit)

  // Формируем JSX с кнопками пагинатора
  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item onClick={() => (props.setActivePage(page))} key={page} active={page === props.activePage}>
        {page}
      </Pagination.Item>,
    );
  }

  return (
    <React.Fragment>
      <Pagination size="sm">{items}</Pagination>
    </React.Fragment>
  );
}

const mapStateToProps = (state: AppStateType) => {
  return {
    books: state.books.books,
    pageLimit: state.books.pageLimit,
    activePage: state.books.activePage,
  }
}

export default connect(mapStateToProps, { setActivePage })(Paginator)