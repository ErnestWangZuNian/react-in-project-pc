import * as actionType from "./action-type";
import Util from "@/utils";
const DEFAULT_SELECTED_MENU = [
  { component: "App", icon: "mobile", key: "/back/index", title: "首页" }
];
const DEFAULT_UNIQUE_MENUKEY = {
  "/back/index": true
};
let defaultState = {
  selectedMenu: Util.storage.getItem("COMMON_SELECTED_MENU")
    ? Util.storage.getItem("COMMON_SELECTED_MENU")
    : DEFAULT_SELECTED_MENU,
  uniqueMenuKey: Util.storage.getItem("COMMON_UNIQUE_MENUKEY")
    ? Util.storage.getItem("COMMON_UNIQUE_MENUKEY")
    : DEFAULT_UNIQUE_MENUKEY
};
//  公共数据源
export const commonData = (state = defaultState, action = {}) => {
  let selectedMenu = state.selectedMenu;
  let currentMenu = action.currentMenu;
  let uniqueMenuKey = state.uniqueMenuKey;
  switch (action.type) {
    case actionType.COMMON_ADDMENU:
      if (!uniqueMenuKey[currentMenu.key]) {
        selectedMenu.push(currentMenu);
        uniqueMenuKey[currentMenu.key] = true;
      }
      Util.storage.setItem("COMMON_SELECTED_MENU", selectedMenu);
      Util.storage.setItem("COMMON_UNIQUE_MENUKEY", uniqueMenuKey);
      return {
        ...state,
        selectedMenu: selectedMenu
      };
      break;
    case actionType.COMMON_DELETEMENU:
      let resultMenu = Util.deleteValue(selectedMenu, currentMenu);
      uniqueMenuKey[currentMenu.key] = false;
      Util.storage.setItem("COMMON_SELECTED_MENU", resultMenu);
      Util.storage.setItem("COMMON_UNIQUE_MENUKEY", uniqueMenuKey);
      return {
        ...state,
        selectedMenu: resultMenu
      };
      break;
    case actionType.COMMON_INITSTATE:
      return defaultState;
      break;
    default:
      return state;
  }
};
