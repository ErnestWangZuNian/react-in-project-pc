import * as ActionType from "./action-type";
//  默认加载
export const PAGEGROUP_LOAD = (key,keyList) => {
  return {
    type: ActionType.PAGEGROUP_LOAD,
    activekey: key,
    keyList: keyList
  };
};
//  跳转页面
export const PAGEGROUP_GOTO = (key, params, config) => {
  return {
    type: ActionType.PAGEGROUP_GOTO,
    activekey: key,
    params: params,
    config: config
  };
};
//  返回上一页
export const PAGEGROUP_BACK = () => {
  return {
    type: ActionType.PAGEGROUP_BACK
  };
};
//  下一页
export const PAGEGROUP_NEXT= (params, config) => {
  return {
    type: ActionType.PAGEGROUP_NEXT,
    params: params,
    config: config
  };
};
//  重置状态
export const PAGEGROUP_INIT = () => {
  return {
    type: ActionType.PAGEGROUP_INIT,
  }
};