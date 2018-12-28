import * as about from "./action-type";
let defaultState = {
  count: 0,
  tableReload: false,
  dataList: [],
  testList: [],
  modal: { add: { visible: false } },
  form: {}
};
// 关于组件
export const aboutData = (state = defaultState, action = {}) => {
  const count = state.count;
  switch (action.type) {
    case about.CLICKBUTTON:
      return {
        ...state,
        ...{ count: state.count + 1 },
        ...{ testList: state.testList.concat([{ name: "12233" }]) }
      };
      break;
    case about.GETINFO:
      return { ...state, ...{ dataList: action.dataList } };
    case about.OPENMODAL:
      let result = null;
      switch (action.modalType) {
        case "ADD":
          result = { ...state, ...{ modal: { add: { visible: true } } } };
          break;
      }
      return result;
      break;
    case about.CONFIRMMODAL:
      let confirmResult = null;
      switch (action.modalType) {
        case "ADD":
          confirmResult = {
            ...state,
            ...{ tableReload: {loding:true} },
            ...{ modal: { add: { visible: false } }}
          };
          break;
      }
      return confirmResult;
      break;
    default:
      return state;
  }
};
