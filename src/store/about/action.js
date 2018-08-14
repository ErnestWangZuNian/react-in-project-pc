import * as about from "./action-type";
// 点击按钮
export const clickButton = () => {
  return {
    type: about.CLICKBUTTON
  };
};
//  获取信息
export const getInfo = () => {
  return async dispatch => {
    try {
      let result = await Api.get("/v1/top");
      dispatch({
        type: about.GETINFO,
        dataList: result.body
      });
    } catch (err) {
      console.error(err);
    }
  };
};
