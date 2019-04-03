import * as ActionType from "./action-type"
//  默认加载
export const PAGEGROUP_LOAD = (key,keyList) => {
  return {
    type: ActionType.PAGEGROUP_LOAD,
    activekey: key,
    keyList: keyList
  }
}
//  跳转页面
export const PAGEGROUP_GOTO = (key, parmas, isReload) => {
  return {
    type: ActionType.PAGEGROUP_GOTO,
    activekey: key,
    parmas,
    isReload
  }
}
//  返回上一页
export const PAGEGROUP_BACK = () => {
  return {
    type: ActionType.PAGEGROUP_BACK
  }
}
//  下一页
export const PAGEGROUP_NEXT= (parmas, config) => {
  return {
    type: ActionType.PAGEGROUP_NEXT,
    parmas: parmas,
    config: config
  }
}
//  重置状态
export const PAGEGROUP_INIT = () => {
  return {
    type: ActionType.PAGEGROUP_INIT,
  }
}