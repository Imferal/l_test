import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col } from "react-bootstrap";
import { reduxForm } from "redux-form";


function AddBookForm(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="addBookForm">
        <Row>
          <Col xs={12} md={8}>
            <Form.Label className="ml-2">
              <Form.Control type="text" placeholder="Название" />
            </Form.Label>
            <Form.Label className="ml-2">
              <Form.Control type="text" placeholder="Автор" />
            </Form.Label>
          </Col>
          <Col xs={12} md={4}>
            <Form.Label>
              <Form.Select aria-label="Default select example">
                {props.genres !== null && props.genres.map(genre => <option>{genre.name}</option>)}
              </Form.Select>
            </Form.Label>
            <Form.Label>
              <Form.Control type="number" placeholder="Год" />
            </Form.Label>
          </Col>
        </Row>

        <FloatingLabel controlId="floatingTextarea" label="Описание" className="mb-3">
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
      </Form.Group>

      <Button variant="primary" type="submit">
        Добавить
      </Button>
    </Form>
  )
}

const AddBookReduxForm = reduxForm({ form: 'addBook' })(AddBookForm)

export default AddBookReduxForm;