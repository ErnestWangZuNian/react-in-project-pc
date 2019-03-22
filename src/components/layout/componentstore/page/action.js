import * as ActionType from "./action-type";
// 新增菜单
export const PAGE_GOTO = (key,params,config) => {
  let result = async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: ActionType.PAGE_GOTO,
          activekey: key,
          params:params,
          config: config
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
  return result;
};