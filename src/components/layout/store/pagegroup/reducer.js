import * as actionType from "./action-type";
let defaultState = {
  activekey: null,
  currentInfo: {
    activekey: null,
    lastActiveKey: null,
    parmas: null,
    isReload: false
  },
  keyList: [],
  history: []
};
//  页面状态管理数据源
export const pageGroupData = (state = defaultState, action = {}) => {
  switch (action.type) {
    //  首次加载
    case actionType.PAGEGROUP_LOAD:
      {
        let history = [].concat(state.history);
        let lastActiveKey = state.activekey;
        let currentInfo = {
          activekey: action.activekey,
          lastActiveKey,
          parmas: null,
          isReload: false,
        }
        history.push(currentInfo);
        return {
          ...state,
          activekey: action.activekey,
          keyList: action.keyList,
          history,
          currentInfo,
        };
        break;
      }
      //  页面跳转
    case actionType.PAGEGROUP_GOTO:
      {
        let history = [].concat(state.history);
        let lastActiveKey = state.activekey;
        let currentInfo = {
          activekey: action.activekey,
          lastActiveKey,
          parmas: action.parmas,
          isReload: action.isReload,
        }
        if (history.length) {
          let result = history.some(item => {
            return item.activekey === action.activekey;
          });
          if (!result) {
            history.push(currentInfo);
          }
        }
        return {
          ...state,
          activekey: action.activekey,
          history,
          currentInfo
        };
        break;
      }
      //  页面回退
    case actionType.PAGEGROUP_BACK:
      {
        let history = state.history;
        let lastActiveKey = null;
        if (history.length) {
          history.forEach(item => {
            if (item.activekey === state.activekey) {
              lastActiveKey = item.lastActiveKey;
            }
            return item;
          })
        }
        return {
          ...state,
          activekey: lastActiveKey,
          history
        };
        break;
      }
      // 页面前进
    case actionType.PAGEGROUP_NEXT:
      {
        let keyList = state.keyList;
        let activekey = state.activekey;
        let history = [].concat(state.history);
        if (keyList.length) {
          keyList.forEach((item, index) => {
            if (item === activekey) {
              if (index < keyList.length - 1) {
                activekey = keyList[index + 1];
                let isHasActivekey = history.some(item => {
                  return item.activekey === activekey
                })
                if (!isHasActivekey) {
                  history.push({
                    activekey: activekey,
                    parmas: action.parmas,
                    config: action.config,
                    lastActiveKey: item
                  })
                }
              } else {
                activekey = keyList[0]
              }
            }
          })
        }
        return {
          ...state,
          activekey: activekey,
          history
        };
        break;
      }
    case actionType.PAGEGROUP_INIT:
      return defaultState;
      break;
    default:
      return state;
  }
};