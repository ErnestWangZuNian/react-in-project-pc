import * as about from "./action-type";
let defaultState = {
  count: 0,
  tableReload: false,
  dataList: [],
  testList: [],
  modal: { add: { visible: false }, test: { visible: false } },
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
    case about.RELOADTABLE:
      return {
        ...state,
        ...{ tableReload: true }
      };
      break;
    case about.CANCELRELOADTABLE:
      return {
        ...state,
        ...{ tableReload: false }
      };
      break;
    case about.GETINFO:
      return { ...state, ...{ dataList: action.dataList } };
    case about.OPENMODAL:
      let result = null;
      switch (action.modalType) {
        case "ADD":
          result = { ...state };
          result.modal.add.visible = true;
          break;
          break;
        case "TEST":
          result = { ...state };
          result.modal.test.visible = true;
          break;
      }
      return result;
      break;
    case about.CONFIRMMODAL:
      let confirmResult = null;
      switch (action.modalType) {
        case "ADD":
          confirmResult = {
            ...state
          };
          confirmResult.modal.add.visible = false;
          break;
        case "TEST":
          confirmResult = {
            ...state
          };
          confirmResult.modal.test.visible = false;
          break;
      }
      return confirmResult;
      break;
    case about.CANCELMODAL:
      let cancelResult = null;
      switch (action.modalType) {
        case "ADD":
          cancelResult = {
            ...state
          };
          cancelResult.modal.add.visible = false;
          break;
        case "TEST":
          cancelResult = {
            ...state
          };
          cancelResult.modal.test.visible = false;
          break;
      }
      return cancelResult;
      break;
    case about.INITSTATE:
      return defaultState;
      break;
    default:
      return state;
  }
};
