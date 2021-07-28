import { BookType } from "../types/types"

const SET_BOOKS = 'SET_BOOKS'
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS'

export type authInitialStateType = {
  books: Array<BookType> | null
  isFetching: boolean
}

const initialState: authInitialStateType = {
  books: null,
  isFetching: false
}

const authReducer = (state = initialState, action: any): authInitialStateType => {


  switch (action.type) {

    case SET_BOOKS: {
      return {
        ...state,
        books: action.books
      }
    }

    // Переключаем статус загрузки (грузится/не грузится)
    case SET_FETCHING_STATUS: {
      return { ...state, isFetching: action.isFetching }
    }

    default:
      return state
  }
}

type setBooksActionType = { type: typeof SET_BOOKS, books: Array<BookType> }
export const setBooks = (books: Array<BookType>): setBooksActionType => (
  { type: SET_BOOKS, books }
)

type setFetchingStatusActionType = { type: typeof SET_FETCHING_STATUS, isFetching: boolean }
export const setFetchingStatus = (isFetching: boolean): setFetchingStatusActionType => (
  { type: SET_FETCHING_STATUS, isFetching }
)

export default authReducer