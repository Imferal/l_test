import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBookContainer from '../AddBook/AddBookContainer';
import BookFilterContainer from '../BookFilter/BookFilterContainer';
import BooksContainer from '../Books/BooksContainer';

function App() {
  return (
    <Container className="p-3">
      <h1 className="p-3 text-center">Книжная полка</h1>
      <Row>
        {/* Форма добавления новой книги */}
        <AddBookContainer />
        {/* Фильтр */}
        <BookFilterContainer />
      </Row>
      {/* Область показа загруженных книг */}
      <BooksContainer />
    </Container >
  );
}

export default App;