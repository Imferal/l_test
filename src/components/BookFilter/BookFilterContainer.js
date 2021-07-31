import axios from "axios"
import { connect } from "react-redux"
import { apiErr, baseURL } from "../../api/api"
import { setBooks, setBooksFetchingStatus } from "../../redux/authReducer";
import BookFilter from "./BookFilter"

const BookFilterContainer = (props) => {
  const onSubmit = (formData) => {
    let filter = ``
    for (let key in formData) {
      if (key !== 'genreIds') {
        filter += `${key}=${formData[key]}&`
      } else {
        filter += formData[key].map((id) => `genreIds=${id}&`)
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

  return <BookFilter onSubmit={onSubmit} {...props} />
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps, { setBooks, setBooksFetchingStatus })(BookFilterContainer)