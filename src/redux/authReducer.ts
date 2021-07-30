import { BookType } from "../types/types"

const SET_BOOKS = 'SET_BOOKS'
const SET_BOOKS_FETCHING_STATUS = 'SET_BOOKS_FETCHING_STATUS'

export type authInitialStateType = {
  books: Array<BookType> | null
  isBooksFetching: boolean
}

const initialState: authInitialStateType = {
  books: null,
  isBooksFetching: false
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
    case SET_BOOKS_FETCHING_STATUS: {
      return { ...state, isBooksFetching: action.isBooksFetching }
    }

    default:
      return state
  }
}

type setBooksActionType = { type: typeof SET_BOOKS, books: Array<BookType> }
export const setBooks = (books: Array<BookType>): setBooksActionType => (
  { type: SET_BOOKS, books }
)

type setBooksFetchingStatusActionType = { type: typeof SET_BOOKS_FETCHING_STATUS, isBooksFetching: boolean }
export const setBooksFetchingStatus = (isBooksFetching: boolean): setBooksFetchingStatusActionType => (
  { type: SET_BOOKS_FETCHING_STATUS, isBooksFetching }
)

export default authReducer