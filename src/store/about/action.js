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
export const openModal = modalType => {
  return {
    type: ActionType.OPENMODAL,
    modalType
  };
};
//  确认弹窗
export const confirmModal = (modalType, values) => {
  let result = null;
  switch (modalType) {
    case "ADD":
      result = async dispatch => {
        try {
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              alert("我是add弹窗异步了两秒哟");
              resolve();
            }, 2000);
          });
          dispatch({
            type: ActionType.CONFIRMMODAL,
            modalType,
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
      break;
    case "TEST":
      result = async dispatch => {
        try {
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              alert("我是test弹窗异步了两秒哟");
              resolve();
            }, 2000);
          });
          dispatch({
            type: ActionType.CONFIRMMODAL,
            modalType,
            values
          });
        } catch (err) {
          console.error(err);
        }
      };
  }

  return result;
};
//  取消弹窗
export const cancelModal = modalType => {
  return {
    type: ActionType.CANCELMODAL,
    modalType: modalType
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
//   初始化状态
export const initState = () => {
  return {
    type: ActionType.INITSTATE
  };
};
