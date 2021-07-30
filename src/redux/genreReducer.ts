import { GenreType } from "../types/types"

const SET_GENRES = 'SET_GENRES'
const SET_GENRES_FETCHING_STATUS = 'SET_GENRES_FETCHING_STATUS'

export type genresInitialStateType = {
  genres: Array<GenreType> | null
  isGenresFetching: boolean
}

const initialState: genresInitialStateType = {
  genres: null,
  isGenresFetching: false
}

const genresReducer = (state = initialState, action: any): genresInitialStateType => {
  switch (action.type) {
    case SET_GENRES: {
      debugger
      return {
        ...state,
        genres: [...action.genres]
      }
    }

    case SET_GENRES_FETCHING_STATUS: {
      return { ...state, isGenresFetching: action.isGenresFetching }
    }

    default:
      return state
  }
}

type setGenresActionType = { type: typeof SET_GENRES, genres: Array<GenreType> }
export const setGenres = (genres: Array<GenreType>): setGenresActionType => (
  { type: SET_GENRES, genres }
)

type setFetchingStatusActionType = { type: typeof SET_GENRES_FETCHING_STATUS, isGenresFetching: boolean }
export const setGenresFetchingStatus = (isGenresFetching: boolean): setFetchingStatusActionType => (
  { type: SET_GENRES_FETCHING_STATUS, isGenresFetching }
)

export default genresReducer