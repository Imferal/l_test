import axios from "axios";
import { Container, Col } from "react-bootstrap";
import { apiErr, baseURL } from "../../helpers/api";
import { BookType, GenreType } from "../../types/types";
import BookFilterReduxForm from "./BookFilterReduxForm";

type Props = {
  genres: Array<GenreType> | null
  setBooks: (books: Array<BookType>) => void
  setBooksFetchingStatus: (isBooksFetching: boolean) => void
}

function BookFilter(props: Props) {

  // Отправка данных фильтра на сервер
  const onSubmit = (formData: any) => {
    // Формирование строки запроса
    let filter = ``
    // Склеиваем данные из формы в строку запроса
    for (let key in formData) {
      if (key !== 'genreIds') {
        filter += `${key}=${formData[key]}&`
      } else {
        filter += formData[key].map((id: number) => `genreIds=${id}&`)
      }
    }
    // Удаляем запятые
    filter = filter.replace(/,/g, '')
    // Если в конце стоит амперсанд - удаляем и его
    if (filter[filter.length - 1] === '&') {
      filter = filter.slice(0, -1)
    }
    // Отправляем запрос на сервер
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