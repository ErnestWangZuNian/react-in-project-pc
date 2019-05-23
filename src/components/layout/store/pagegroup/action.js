import * as ActionType from './action-type';
//  默认加载
export const PAGEGROUP_LOAD = (key, keyList) => ({
  type: ActionType.PAGEGROUP_LOAD,
  activekey: key,
  keyList,
});
//  跳转页面
export const PAGEGROUP_GOTO = (key, parmas, isReload) => ({
  type: ActionType.PAGEGROUP_GOTO,
  activekey: key,
  parmas,
  isReload,
});
//  返回上一页
export const PAGEGROUP_BACK = () => ({
  type: ActionType.PAGEGROUP_BACK,
});
//  下一页
export const PAGEGROUP_NEXT = (parmas, config) => ({
  type: ActionType.PAGEGROUP_NEXT,
  parmas,
  config,
});
//  重置状态
export const PAGEGROUP_INIT = () => ({
  type: ActionType.PAGEGROUP_INIT,
});
