import Container from "react-bootstrap/Container"
import { Col } from "react-bootstrap";
import AddBookReduxForm from "./AddBookReduxForm";
import { apiErr, baseURL } from "../../api/api";
import { FormData } from "../../types/types";
import axios from "axios";

type Props = any

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
    formData.genreIds = formData.genreIds.map(Number);
    axios.post(`${baseURL}books`, formData)
      .then(() => getBooks())
      .catch((error) => apiErr(error));
  }

  const onSubmit = (formData: FormData) => {
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