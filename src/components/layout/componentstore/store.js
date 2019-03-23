import { createStore, combineReducers, applyMiddleware } from "redux";
import * as pageData from "./page/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middleware = [thunk, logger];
let store = createStore(
  combineReducers({ ...pageData }),
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
