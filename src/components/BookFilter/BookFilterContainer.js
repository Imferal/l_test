import { connect } from "react-redux"
import BookFilter from "./BookFilter"

const BookFilterContainer = (props) => {
  const onSubmit = (formData) => {
    debugger
    filterBook(formData)
    // Фильтр
    // Переводим жанры в формат для отправки
    // Добавляем перед каждым элементом амперсанд
    // Превращаем массив в строку
    props.setBooksFetchingStatus(true);
    // Добавляем строку к запросу
    axios.get({ baseURL } + 'books')
      .then(response => {
        props.setBooks(response.data);
        props.setBooksFetchingStatus(false);
      })
      .catch((error) => apiErr(error));

  }

  return <BookFilter onSubmit={onSubmit} {...props} />
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps, {})(BookFilterContainer)