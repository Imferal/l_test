import axios from "axios";
import AddBook from "./AddBook";
import { AppStateType } from '../../redux/state';
import { BookType, GenreType } from "../../types/types";
import { connect } from "react-redux";
import { setBooks, setBooksFetchingStatus, setPageLimit } from "../../redux/booksReducer";
import { setGenres, setGenresFetchingStatus } from "../../redux/genreReducer";
import { apiErr, baseURL } from "../../api/api";


type Props = {
  genres: Array<GenreType> | null
  isGenresFetching: boolean
  setPageLimit: (pageLimit: number) => void
  setBooks: (books: Array<BookType>) => void
  setBooksFetchingStatus: (isBooksFetching: boolean) => void
  setGenres: (correctedGenres: Array<GenreType>) => void
  setGenresFetchingStatus: (isGenresFetching: boolean) => void
}

const AddBookContainer = (props: Props) => {
  // Склеивание жанров с одинаковым Id
  const mergeSameGenreIds = (genresToCheck: Array<GenreType>) => {
    // Находим дубли
    let wrongId = []
    for (let i = 1; i < genresToCheck.length; i++) {
      let prev = i - 1
      if (genresToCheck[prev].id === genresToCheck[i].id) {
        console.log(`Дублируются ${prev} и ${i}`)
        wrongId.push(prev)
      }
    }

    // Склеиваем дубликаты
    for (let i = wrongId.length - 1; i >= 0; i--) {
      let positionToDelete = wrongId[i] + 1
      let doubleIdName = genresToCheck[positionToDelete].name
      genresToCheck[wrongId[i]].name += ' или ' + doubleIdName
      genresToCheck.splice(positionToDelete, 1)
    }

    return (genresToCheck)
  }

  const getGenres = () => {
    props.setGenresFetchingStatus(true)
    axios
      .get(`${baseURL}genre`)
      .then(response => {
        let correctedGenres = mergeSameGenreIds(response.data)
        props.setGenres(correctedGenres)
        props.setGenresFetchingStatus(false)
      })
      .catch((error) => {
        apiErr(error)
      });
  }

  if (props.genres === null && props.isGenresFetching === false) {
    getGenres()
  }

  return (
    <AddBook {...props} />
  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isGenresFetching: state.genres.isGenresFetching,
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps, { setGenres, setGenresFetchingStatus, setBooksFetchingStatus, setBooks, setPageLimit })(AddBookContainer)