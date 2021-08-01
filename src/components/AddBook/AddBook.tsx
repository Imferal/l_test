import Container from "react-bootstrap/Container"
import { Col } from "react-bootstrap";
import AddBookReduxForm from "./AddBookReduxForm";
import { apiErr, baseURL } from "../../helpers/api";
import { BookType, FormData, GenreType } from "../../types/types";
import axios from "axios";

type Props = {
  genres: Array<GenreType> | null
  setBooks: (books: Array<BookType>) => void
  setPageLimit: (pageLimit: number) => void
  setBooksFetchingStatus: (isBooksFetching: boolean) => void
}

function AddBook(props: Props) {
  const getBooks = () => {
    props.setBooksFetchingStatus(true);
    axios.get(`${baseURL}books`)
      .then(response => {
        props.setBooks(response.data);
        props.setBooksFetchingStatus(false);
      })
      .catch((error) => apiErr(error));
  }

  const addBook = (formData: FormData) => {
    // Переводим ID жанров в массив перед отправкой    
    formData.genreIds = formData.genreIds.map(Number);
    // Проверяем, надо ли создать новую книгу или изменить существующую
    if (formData.ID == null) {
      axios.post(`${baseURL}books`, formData)
        .then(() => getBooks())
        .catch((error) => apiErr(error));
    }
    else {
      axios.patch(`${baseURL}books/${formData.ID}`, formData)
        .then(() => getBooks())
        .catch((error) => apiErr(error));
    }
  }

  const onSubmit = (formData: any) => {
    addBook(formData)
  }

  return (
    <Col sm={12} md={6}>
      <Container className="px-0 py-3">
        <h2>Добавить книгу</h2>
        <AddBookReduxForm onSubmit={onSubmit} {...props} />
      </Container>
    </Col>
  )
}

export default AddBook;