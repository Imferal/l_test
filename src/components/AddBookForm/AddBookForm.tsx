import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Col } from "react-bootstrap";

function AddBookForm() {

  return (
    <Col sm={12} md={6}>
      <Container className="px-0 py-3">
        <h2>Добавить книгу</h2>
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
                    <option>Жанр</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
      </Container>
    </Col>
  )
}

export default AddBookForm;