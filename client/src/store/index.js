import { createStore, applyMiddleware } from "redux";
//import ThunkMiddleware from "redux-thunk";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
