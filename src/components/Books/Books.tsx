import Paginator from '../Paginator/Paginator';
import { Card, Button, Col, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/CardHeader';
import { BookType } from '../../types/types';
import keyGen from '../../_helpers/keyGen';

type Props = {
  books: Array<BookType> | null
}

function Books(props: Props) {

  let booksJsx = [<p>Загружается...</p>]

  if (props.books !== null) {
    booksJsx = props.books.map((book, i) => <Col sm={12} md={6} lg={4} as="li" className="mb-3" key={keyGen()}>
      <Card as="article">
        <CardHeader>
          <Row>
            <Col>
              <h4>{book.name}</h4>
            </Col>
            <Col md="auto">
              <Button variant="link">Удалить</Button>
            </Col>
          </Row>
        </CardHeader>
        <p className="py-3 px-sm-3">{book.author}</p>
        <p className="py-1 px-sm-3 font-italic"><em>{book.description}</em></p>
        <Row >
          <Col className="py-1 px-sm-3"><p className="py-1 px-sm-3 text-muted">{book.genre[0].name}</p></Col>
          <Col className="py-1 px-sm-3 text-right"><p className="py-1 px-sm-3 text-muted">{book.date}</p></Col>
        </Row>
      </Card>
    </Col>
    )
  }

  return (
    <>
      <Row className="px-0 pt-3" as="ul">
        {booksJsx}
      </Row>
      <Paginator />
    </>
  )
}

export default Books;