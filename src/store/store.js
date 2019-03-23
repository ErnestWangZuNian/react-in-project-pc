import { createStore, combineReducers, applyMiddleware } from "redux";
import * as commonData from "./menu/reducer";
import * as pageData from "./page/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middleware = [thunk, logger];
let store = createStore(
  combineReducers({ ...commonData }),
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
