import { createStore, combineReducers, applyMiddleware } from "redux";
import * as about from "./about/reducer";
// import * as production from "./production/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk, logger];
let store = createStore(
  combineReducers({ ...about }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
