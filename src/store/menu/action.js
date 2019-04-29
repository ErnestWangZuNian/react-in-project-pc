/* eslint-disable */
import * as ActionType from './action-type'
// 新增菜单
export const MENU_ADDMENU = item => {
  let result = async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: ActionType.MENU_ADDMENU,
          currentMenu: item
        })
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }
  return result
}
// 删除菜单
export const MENU_DELETEMENU = item => {
  let result = async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: ActionType.MENU_DELETEMENU,
          currentMenu: item
        })
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }
  return result
}
// 默认菜单
export const MENU_INITSTATE = () => {
  return {
    type: ActionType.MENU_INITSTATE
  }
}