import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { GenreType } from "../../types/types";

type Props = {
  handleSubmit: any
  genres: Array<GenreType> | null
}

const AddBookForm = (props: Props) => {
  // Совместимость React-Bootstrap и Redux-Form
  // @ts-ignore
  const FieldInput = ({ input, type, placeholder, min, max }) => {
    return (
      <Form.Control
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        value={input.value}
        onChange={input.onChange} />
    )
  }

  // @ts-ignore
  const FieldSelect = ({ input, placeholder }) => {
    return (
      <Form.Select
        placeholder={placeholder}
        multiple={true}
        onChange={input.onChange}>
        <option key="0" value="preset" disabled>Выберите жанр</option>
        {props.genres !== null && props.genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
      </Form.Select>
    )
  }

  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group className="mb-3" controlId="addBookForm">
        <Row>
          <Col xs={12} md={8}>
            <Form.Label className="ml-2">
              <Field name="name" type="text" component={FieldInput} placeholder="Название" />
            </Form.Label>
            <Form.Label className="ml-2">
              <Field name="author" type="text" component={FieldInput} placeholder="Автор" />
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea" label="Описание" className="my-sm-2 ml-2">
              <Field name="description" as="textarea" component={FieldInput} placeholder="Leave a comment here" />
            </FloatingLabel>
          </Col>
          <Col xs={12} md={4}>
            <Form.Label>
              <Field name="genreIds" component={FieldSelect} componentClass="select" aria-label="Выбор жанра">
              </Field>
            </Form.Label>
            <Form.Label>
              <Field name="date" type="number" component={FieldInput} placeholder="Год" />
            </Form.Label>
          </Col>
        </Row>
        <Row md={12}>
          <Col md={4}>
            <Form.Label className="d-flex align-items-center mb-0">
              <Field name="ID" type="number" component={FieldInput} placeholder="Id" />
            </Form.Label>
          </Col>
          <Col md={8} className="d-flex align-items-stretch">
            <span className="d-flex align-items-center py-1">Укажите Id книги, чтобы изменить её</span>
          </Col>
        </Row>
      </Form.Group>

      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  )
}

// @ts-ignore
const AddBookReduxForm = reduxForm({ form: 'addBook' })(AddBookForm)

export default AddBookReduxForm;