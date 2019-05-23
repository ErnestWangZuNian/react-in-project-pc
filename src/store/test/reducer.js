import * as actionType from './action-type';

const defaultState = {
  count: 1000,
};
//  菜单数据源
export const testData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionType.TEST_INIT: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
};
