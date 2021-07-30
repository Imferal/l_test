import Container from "react-bootstrap/Container"
import { Col } from "react-bootstrap";
import AddBookReduxForm from "./AddBookReduxForm";
// import { GenreType } from "../../types/types";

type Props = any

function AddBook(props: Props) {
  return (
    <Col sm={12} md={6}>
      <Container className="px-0 py-3">
        <h2>Добавить книгу</h2>
        <AddBookReduxForm {...props} />
      </Container>
    </Col>
  )
}

export default AddBook;