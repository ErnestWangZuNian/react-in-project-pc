/* eslint-disable */
import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux"
import * as testData from "./test/reducer"
import * as menuData from "./menu/reducer"
import logger from "redux-logger"
import thunk from "redux-thunk"
const middleware = [thunk, logger]
let store = createStore(
  combineReducers({
    ...testData,
    ...menuData
  }),
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
)

export default store