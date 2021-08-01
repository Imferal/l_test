import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookType } from '../../types/types';

type Props = {
  books: Array<BookType> | null
  pageLimit: number
  activePage: number
  setActivePage: (activePage: number) => void
}

function Paginator(props: Props) {
  let items = [];
  let totalItems: number

  props.books === null ?
    totalItems = 0 :
    totalItems = props.books.length

  let totalPages = Math.ceil(totalItems / props.pageLimit)

  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item onClick={() => (props.setActivePage(page))} key={page} active={page === props.activePage}>
        {page}
      </Pagination.Item>,
    );
  }

  const paginationBasic = (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );

  return (
    <>
      {paginationBasic}
    </>
  );
}

export default Paginator;
