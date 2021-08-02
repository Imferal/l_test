import { combineReducers, createStore } from 'redux';
import booksReducer from './booksReducer';
import { reducer as fromReducer } from 'redux-form';
import genresReducer from './genreReducer';

// Объединяем редюсеры
let rootReducer = combineReducers({
  books: booksReducer,
  genres: genresReducer,
  form: fromReducer
});

// Экспортируем типы из стейта
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// Создаём стор
let store: any = createStore(rootReducer);

export default store

// @ts-ignore
// window.store = store