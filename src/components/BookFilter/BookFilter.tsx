import { Container, Col } from "react-bootstrap";
import { GenreType } from "../../types/types";
import BookFilterReduxForm from "./BookFilterReduxForm";

type Props = {
  genres: Array<GenreType> | null
  onSubmit: () => void
}

function BookFilter(props: Props) {



  return (
    <Col sm={12} md={6}>
      <Container className="px-0 py-3">
        <h2>Найти книги</h2>
        <BookFilterReduxForm {...props} />
      </Container >
    </Col>
  )
}

export default BookFilter