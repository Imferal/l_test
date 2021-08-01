import axios from "axios";
import { Container, Col } from "react-bootstrap";
import { apiErr, baseURL } from "../../api/api";
import { BookType, GenreType } from "../../types/types";
import BookFilterReduxForm from "./BookFilterReduxForm";

type Props = {
  genres: Array<GenreType> | null
  setBooks: (books: Array<BookType>) => void
  setBooksFetchingStatus: (isBooksFetching: boolean) => void
}

function BookFilter(props: Props) {

  const onSubmit = (formData: any) => {
    let filter = ``
    for (let key in formData) {
      if (key !== 'genreIds') {
        filter += `${key}=${formData[key]}&`
      } else {
        filter += formData[key].map((id: number) => `genreIds=${id}&`)
      }
    }
    // Удаляем запятые из запроса
    filter = filter.replace(/,/g, '')
    // Если в конце стоит амперсанд - удаляем его
    if (filter[filter.length - 1] === '&') {
      filter = filter.slice(0, -1)
    }
    props.setBooksFetchingStatus(true);
    axios.get(`${baseURL}books/?${filter}`)
      .then(response => {

        props.setBooks(response.data);
        props.setBooksFetchingStatus(false);
      })
      .catch((error) => apiErr(error));
  }

  return (
    <Col sm={12} md={6}>
      <Container className="px-0 py-3">
        <h2>Найти книги</h2>
        <BookFilterReduxForm onSubmit={onSubmit} {...props} />
      </Container >
    </Col>
  )
}

export default BookFilter