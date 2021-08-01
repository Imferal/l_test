import { BookType } from "../types/types"

const SET_BOOKS = 'SET_BOOKS'
const SET_PAGE_LIMIT = 'SET_PAGE_LIMIT'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
const SET_BOOKS_FETCHING_STATUS = 'SET_BOOKS_FETCHING_STATUS'

export type booksInitialStateType = {
  books: Array<BookType> | null
  isBooksFetching: boolean
  pageLimit: number
  pageLimitVariants: Array<number>
  activePage: number
}

const initialState: booksInitialStateType = {
  books: null,
  isBooksFetching: false,
  pageLimit: 5,
  pageLimitVariants: [5, 10, 20, 50],
  activePage: 1,
}

const booksReducer = (state = initialState, action: any): booksInitialStateType => {
  switch (action.type) {
    // Сохраняем полученные с сервера книги
    case SET_BOOKS: {
      return { ...state, books: action.books }
    }

    // Какую страницу показываем (пагинатор)
    case SET_ACTIVE_PAGE: {
      return { ...state, activePage: action.activePage }
    }

    // Переключаем статус загрузки (грузится/не грузится)
    case SET_BOOKS_FETCHING_STATUS: {
      return { ...state, isBooksFetching: action.isBooksFetching }
    }

    // Меняем количество отображаемых на странице книг
    case SET_PAGE_LIMIT: {
      return { ...state, pageLimit: action.pageLimit }
    }

    default:
      return state
  }
}

type setBooksActionType = { type: typeof SET_BOOKS, books: Array<BookType> }
export const setBooks = (books: Array<BookType>): setBooksActionType => (
  { type: SET_BOOKS, books }
)

type setPageLimitType = { type: typeof SET_PAGE_LIMIT, pageLimit: number }
export const setPageLimit = (pageLimit: number): setPageLimitType => (
  { type: SET_PAGE_LIMIT, pageLimit }
)

type setActivePageType = { type: typeof SET_ACTIVE_PAGE, activePage: number }
export const setActivePage = (activePage: number): setActivePageType => (
  { type: SET_ACTIVE_PAGE, activePage }
)

type setBooksFetchingStatusActionType = { type: typeof SET_BOOKS_FETCHING_STATUS, isBooksFetching: boolean }
export const setBooksFetchingStatus = (isBooksFetching: boolean): setBooksFetchingStatusActionType => (
  { type: SET_BOOKS_FETCHING_STATUS, isBooksFetching }
)

export default booksReducer