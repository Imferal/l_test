import { combineReducers, createStore } from 'redux';
import authReducer from './authReducer';


let rootReducer = combineReducers({
  auth: authReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store: any = createStore(rootReducer);

export default store

// @ts-ignore
window.store = store