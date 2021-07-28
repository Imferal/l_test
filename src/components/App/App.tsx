import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBookForm from '../AddBookForm/AddBookForm';
import BookFilter from '../BookFilter/BookFilter';
import BooksContainer from '../Books/BooksContainer';

function App() {
  return (
    <Container className="p-3">
      <h1 className="p-3 text-center">Книжная полка</h1>
      <Row>
        <AddBookForm />
        <BookFilter />
      </Row>
      <BooksContainer />
    </Container >
  );
}

export default App;