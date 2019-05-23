import * as actionType from './action-type';

const defaultState = {
  activekey: null,
  currentInfo: {
    activekey: null,
    lastActiveKey: null,
    parmas: null,
    isReload: false,
  },
  keyList: [],
  history: [],
};
//  页面状态管理数据源
export const pageGroupData = (state = defaultState, action = {}) => {
  switch (action.type) {
    //  首次加载
    case actionType.PAGEGROUP_LOAD:
    {
      const history = [].concat(state.history);
      const lastActiveKey = state.activekey;
      const currentInfo = {
        activekey: action.activekey,
        lastActiveKey,
        parmas: null,
        isReload: false,
      };
      history.push(currentInfo);
      return {
        ...state,
        activekey: action.activekey,
        keyList: action.keyList,
        history,
        currentInfo,
      };
    }
    //  页面跳转
    case actionType.PAGEGROUP_GOTO:
    {
      const history = [].concat(state.history);
      const lastActiveKey = state.activekey;
      const currentInfo = {
        activekey: action.activekey,
        lastActiveKey,
        parmas: action.parmas,
        isReload: action.isReload,
      };
      if (history.length) {
        const result = history.some(item => item.activekey === action.activekey);
        if (!result) {
          history.push(currentInfo);
        }
      }
      return {
        ...state,
        activekey: action.activekey,
        history,
        currentInfo,
      };
    }
    //  页面回退
    case actionType.PAGEGROUP_BACK:
    {
      const { history } = state;
      let lastActiveKey = null;
      if (history.length) {
        history.forEach((item) => {
          if (item.activekey === state.activekey) {
            lastActiveKey = item.lastActiveKey;
          }
          return item;
        });
      }
      return {
        ...state,
        activekey: lastActiveKey,
        history,
      };
    }
    // 页面前进
    case actionType.PAGEGROUP_NEXT:
    {
      const { keyList } = state;
      let { activekey } = state;
      const history = [].concat(state.history);
      if (keyList.length) {
        keyList.forEach((item, index) => {
          if (item === activekey) {
            if (index < keyList.length - 1) {
              activekey = keyList[index + 1];
              const isHasActivekey = history.some(item => item.activekey === activekey);
              if (!isHasActivekey) {
                history.push({
                  activekey,
                  parmas: action.parmas,
                  config: action.config,
                  lastActiveKey: item,
                });
              }
            } else {
              activekey = keyList[0];
            }
          }
        });
      }
      return {
        ...state,
        activekey,
        history,
      };
    }
    case actionType.PAGEGROUP_INIT:
      return defaultState;
    default:
      return state;
  }
};
