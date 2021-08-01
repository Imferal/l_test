import { Form, Col, Row, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { GenreType } from "../../types/types";

type Props = {
  handleSubmit: any
  genres: Array<GenreType> | null
}

const BookFilterForm = (props: Props) => {

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
            <Row>
              <Form.Label className="ml-2">
                <Field name="name" type="text" component={FieldInput} placeholder="Название" />
              </Form.Label>
            </Row>
            <Row>
              <Form.Label className="ml-2">
                <Field name="author" type="text" component={FieldInput} placeholder="Автор" />
              </Form.Label>
            </Row>
            <Row>
              <Col xs={6}>
                <Form.Label>
                  <Field name="dateFrom" type="number" component={FieldInput} placeholder="Год От" />
                </Form.Label>
              </Col>
              <Col xs={6}>
                <Form.Label>
                  <Field name="dateTo" type="number" component={FieldInput} placeholder="Год До" />
                </Form.Label>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Form.Label>
              <Field name="genreIds" component={FieldSelect} componentClass="select" placeholder="Выберите жанр" aria-label="Выбор жанра" />
            </Form.Label>
          </Col>
        </Row>
      </Form.Group>

      <Button variant="primary" type="submit">
        Найти
      </Button>
    </Form>
  )
}

// @ts-ignore
const BookFilterReduxForm = reduxForm({ form: 'bookFilter' })(BookFilterForm)

export default BookFilterReduxForm