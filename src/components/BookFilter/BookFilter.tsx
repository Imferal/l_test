import { Button, Container, FloatingLabel, Form, Row, Col } from "react-bootstrap";

function BookFilter() {
  return (
    <Col sm={12} md={6}>
      <Container className="px-0 py-3">
        <h2>Найти книги</h2>
        <Form>
          <Form.Group className="mb-3" controlId="addBookForm">
            <Row>
              <Col xs={12} md={6}>
                <Form.Label className="ml-2">
                  <Form.Control type="text" placeholder="Название" />
                </Form.Label>
              </Col>
              <Col xs={12} md={6}>
                <Form.Label className="ml-2">
                  <Form.Control type="text" placeholder="Автор" />
                </Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
                <Form.Label>
                  <Form.Control type="number" placeholder="Год От" />
                </Form.Label>
              </Col>
              <Col xs={6} md={4}>
                <Form.Label>
                  <Form.Control type="number" placeholder="Год До" />
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
              </Col>
            </Row>

            <FloatingLabel controlId="floatingTextarea" label="Описание" className="mb-3">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
          </Form.Group>

          <Button variant="primary" type="submit">
            Найти
          </Button>
        </Form>
      </Container >
    </Col>
  )
}

export default BookFilter