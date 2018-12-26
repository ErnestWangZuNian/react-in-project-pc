const ActionType ={
  CLICKBUTTON: "CLICKBUTTON",
  GETINFO: "GETINFO"
};
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
