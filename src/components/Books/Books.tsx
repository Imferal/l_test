import Paginator from '../Paginator/Paginator';
import { Card, Button, Col, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/CardHeader';

function Books() {

  return (
    <>
      <Row className="px-0 pt-3" as="ul">
        <Col sm={12} md={6} lg={4} as="li" className="mb-3">
          <Card as="article">
            <CardHeader>
              <Row>
                <Col>
                  <h4>Название книги</h4>
                </Col>
                <Col md="auto">
                  <Button variant="link">Удалить</Button>
                </Col>
              </Row>
            </CardHeader>
            <p className="py-3 px-sm-3">автор</p>
            <p className="py-1 px-sm-3 font-italic"><em>описание</em></p>
            <Row >
              <Col className="py-1 px-sm-3"><p className="py-1 px-sm-3 text-muted">жанр</p></Col>
              <Col className="py-1 px-sm-3 text-right"><p className="py-1 px-sm-3 text-muted">год</p></Col>
            </Row>
          </Card>
        </Col>

      </Row>
      <Paginator />
    </>
  )
}

export default Books;