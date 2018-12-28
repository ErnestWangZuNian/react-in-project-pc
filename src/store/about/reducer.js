import * as about from "./action-type";
let defaultState = {
  count: 0,
  dataList: [],
  testList: [],
  form: {}
};
// 关于组件
export const aboutData = (state = defaultState, action = {}) => {
  const count = state.count;
  switch (action.type) {
    case about.CLICKBUTTON:
      return {
        ...state,
        ...{count: state.count+1},
        ...{ testList: state.testList.concat([{ name: "12233" }]) }
      };
    case about.GETINFO:
      return { ...state, ...{ dataList: action.dataList }};
    default:
      return state;
  }
};
