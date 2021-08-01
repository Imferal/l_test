
import * as React from 'react';
import { Card, Button, Col, Row, Container, Badge } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/CardHeader';
import generateKey from '../../helpers/generateKey';
import { BookType } from '../../types/types';
import PageLimitFilter from '../PageLimitFilter/PageLimitFilter';
import PaginationContainer from '../Paginator/PaginationContainer';

type Props = {
  books: Array<BookType> | null
  deleteBook: (id: number) => void
  activePage: number
  pageLimit: number
}

function Books(props: Props) {
  let booksJsx = [<p key="42">Загружается...</p>]

  if (props.books !== null) {
    let booksOnPage = props.books.slice(((props.activePage - 1) * props.pageLimit), props.activePage * props.pageLimit)
    booksJsx = booksOnPage.map((book) => <Col sm={12} md={6} lg={4} as="li" className="mb-3" key={book.id}>
      <Card as="article">
        <CardHeader>
          <Row>
            <Col>
              <h4>{book.name}</h4>
            </Col>
            <Col md="auto">
              <Button
                variant="link"
                onClick={() => props.deleteBook(book.id)}
                className="px-0">Удалить
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <p className="pt-3 px-3">{book.author}</p>
        <p className="px-3 font-italic"><em>{book.description}</em></p>
        <Container className="d-flex justify-content-between px-3">
          <Col className="pr-3">
            {book.genre.map((genre) => {
              return <Badge
                bg="success"
                key={generateKey()}
                className="py-1 pb-2 px-sm-3 mr-1">{genre.name}</Badge>
            })}
          </Col>
          <Col className="text-right">
            <p className="text-end">{book.date}</p>
          </Col>
        </Container>
        <Container className="px-3 pb-3">
          <span className="text-muted">ID: {book.id}</span>
        </Container>
      </Card>
    </Col >
    )
  }

  return (
    <React.Fragment>
      <PageLimitFilter />
      <Row className="px-0 pt-3" as="ul">
        {booksJsx}
      </Row>
      <PaginationContainer />
    </React.Fragment>
  )
}

export default Books;