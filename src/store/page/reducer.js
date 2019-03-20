import * as actionType from "./action-type";
let defaultState = {
  activeKey: 0,
  params: null
};
//  公共数据源
export const pageData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionType.PAGE_GOTO:
      return {
        ...state,
        activeKey: action.activeKey,
        params: action.params
      };
      break;
    default:
      return state;
  }
};
