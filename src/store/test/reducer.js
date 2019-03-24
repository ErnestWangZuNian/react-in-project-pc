import * as actionType from './action-type';
import Util from '@/utils';
import routeConfig from '@/routes/config';
let defaultState = {
  count: 1000
};
//  菜单数据源
export const testData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionType.TEST_INIT:
      return defaultState;
      break;
    default:
      return state;
  }
};