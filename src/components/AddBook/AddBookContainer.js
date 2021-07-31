import axios from "axios";
import React from "react";
// import { BookType } from "../../types/types";
import { connect } from "react-redux";
import { setBooks, setBooksFetchingStatus } from "../../redux/authReducer";
import { setGenres, setGenresFetchingStatus } from "../../redux/genreReducer";
import { apiErr, baseURL } from "../../api/api";
import AddBook from "./AddBook";

// type Props = {
//   books: Array<BookType>
//   setBooks: (books: Array<BookType>) => void
// }

const AddBookContainer = (props) => {
  // Склеивание жанров с одинаковым Id
  const mergeSameGenreIds = (genres) => {
    // Находим дубли
    let wrongId = []
    for (let i = 1; i < genres.length; i++) {
      let prev = i - 1
      if (genres[prev].id === genres[i].id) {
        console.log(`Дублируются ${prev} и ${i}`)
        wrongId.push(prev)
      }
    }

    // Склеиваем дубликаты
    for (let i = wrongId.length - 1; i >= 0; i--) {
      let positionToDelete = wrongId[i] + 1
      let doubleIdName = genres[positionToDelete].name
      genres[wrongId[i]].name += ' или ' + doubleIdName
      genres.splice(positionToDelete, 1)
    }

    return (genres)
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

const mapStateToProps = (state) => {
  return {
    isGenresFetching: state.genres.isGenresFetching,
    genres: state.genres.genres
  }
}

export default connect(mapStateToProps, { setGenres, setGenresFetchingStatus, setBooksFetchingStatus, setBooks })(AddBookContainer)