import { Form, Col, Row, FloatingLabel, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

const BookFilterForm = (props) => {

  // Совместимость React-Bootstrap и Redux-Form
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

  const FieldSelect = ({ input, placeholder }) => {
    return (
      <Form.Select
        placeholder={placeholder}
        value={input.value}
        multiple={true}
        onChange={input.onChange}>
        <option value="" disabled selected>Выберите жанр</option>
        {props.genres !== null && props.genres.map(genre => <option value={genre.id}>{genre.name}</option>)}
      </Form.Select>
    )
  }

  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group className="mb-3" controlId="addBookForm">
        <Row>
          <Col xs={12} md={6}>
            <Form.Label className="ml-2">
              <Field name="name" type="text" component={FieldInput} placeholder="Название" />
            </Form.Label>
          </Col>
          <Col xs={12} md={6}>
            <Form.Label className="ml-2">
              <Field name="author" type="text" component={FieldInput} placeholder="Автор" />
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              <Col xs={6} md={6}>
                <Form.Label>
                  <Field name="dateFrom" type="number" component={FieldInput} placeholder="Год От" />
                </Form.Label>
              </Col>
              <Col xs={6} md={6}>
                <Form.Label>
                  <Field name="dateTo" type="number" component={FieldInput} placeholder="Год До" />
                </Form.Label>
              </Col>
            </Row>

            <FloatingLabel controlId="floatingTextarea" label="Описание" className="my-sm-2 ml-2">
              <Field name="description" as="textarea" component={FieldInput} placeholder="Leave a comment here" />
            </FloatingLabel>

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

const BookFilterReduxForm = reduxForm({ form: 'bookFilter' })(BookFilterForm)

export default BookFilterReduxForm