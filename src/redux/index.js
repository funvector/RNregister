import { createStore, combineReducers, compose } from "redux";
import { postReducer } from './redusers/post'

const rootReducer = combineReducers({
  postReducer
})

export default store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))