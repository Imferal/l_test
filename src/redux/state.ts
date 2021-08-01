import { combineReducers, createStore } from 'redux';
import booksReducer from './booksReducer';
import { reducer as fromReducer } from 'redux-form';
import genresReducer from './genreReducer';


let rootReducer = combineReducers({
  books: booksReducer,
  genres: genresReducer,
  form: fromReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store: any = createStore(rootReducer);

export default store

// @ts-ignore
window.store = store