import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import * as menuData from "./menu/reducer";
import * as pageGroupData from "./pagegroup/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middleware = [thunk, logger];
let store = createStore(
  combineReducers({
    ...menuData,
    ...pageGroupData
  }),
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;