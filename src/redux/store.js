import postReducer from "./reducer/postReducer"
import { createStore } from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"


const store = createStore(postReducer,applyMiddleware(thunk))


export default store