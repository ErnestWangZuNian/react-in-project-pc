import * as ActionType from "./action-type";
// 新增菜单
export const COMMON_ADDMENU = item => {
  let result = async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: ActionType.COMMON_ADDMENU,
          currentMenu: item
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
  return result;
};
// 删除菜单
export const COMMON_DELETEMENU = item => {
  let result = async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: ActionType.COMMON_DELETEMENU,
          currentMenu: item
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
  return result;
};
// 默认菜单
export const COMMON_INITSTATE = () => {
  return {
    type: ActionType.COMMON_INITSTATE
  };
};