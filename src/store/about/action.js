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
export const confirmModal = values => {
  return async dispatch => {
    try {
      let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          alert("我异步了两秒哟");
          resolve();
        }, 2000);
      });
      dispatch({
        type: ActionType.CONFIRMMODAL,
        modalType: "ADD",
        values
      });
      dispatch({
        type: ActionType.RELOADTABLE
      });
      dispatch({
        type: ActionType.CANCELRELOADTABLE
      });
    } catch (err) {
      console.error(err);
    }
  };
};
//  取消弹窗
export const cancelModal = () => {
  return {
    type: ActionType.CANCELMODAL,
    modalType: "ADD"
  };
};
//  刷新列表
export const reloadTable = () => {
  return {
    type: ActionType.RELOADTABLE
  };
};
//  取消刷新列表
export const cancelReloadTable = () => {
  return {
    type: ActionType.CANCELRELOADTABLE
  };
};
