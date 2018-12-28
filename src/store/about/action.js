import * as ActionType from "./action-type";
// 点击按钮
export const clickButton = () => {
  return {
    type: ActionType.CLICKBUTTON
  };
};
//  获取信息
export const getInfo = () => {
  return async dispatch => {
    try {
      let result = await Api.get("/v1/top");
      dispatch({
        type: ActionType.GETINFO,
        dataList: result.body
      });
    } catch (err) {
      console.error(err);
    }
  };
};
//  打开弹窗
export const openModal = () => {
  return {
    type: ActionType.OPENMODAL,
    modalType: "ADD"
  };
};
//  关闭弹窗
export const closeModal = () => {
  return {
    type: ActionType.CLOSEMODAL,
    modalType: "ADD"
  };
};
//  确认弹窗
export const confirmModal = (values) => {
  return {
    type: ActionType.CONFIRMMODAL,
    modalType: "ADD",
    values
  };
};
//   取消弹窗
export const cancelModal = () => {
  return {
    type: ActionType.CANCELMODAL,
    modalType: "ADD",
    
  };
};
