import * as actionType from "./action-type";
let defaultState = {
  activekey: null,
  history: []
};
//  公共数据源
export const pageData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionType.PAGE_GOTO:
      let history = state.history;
      let lastActiveKey = state.activekey;
      if (history.length) {
        let result = history.some(item => {
          return item.activekey === action.activekey;
        });
        if (!result) {
          history.push({
            activekey: action.activekey,
            params: action.params,
            config: action.config,
            lastActiveKey
          });
        }
      } else {
        history.push({
          activekey: action.activekey,
          params: action.params,
          config: action.config,
          lastActiveKey
        });
      }
      return {
        ...state,
        activekey: action.activekey
      };
      break;
    default:
      return state;
  }
};
