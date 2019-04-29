/* eslint-disable */
import * as actionType from './action-type';
import Util from '@/utils';
import routeConfig from '@/routes/config';
const DEFAULT_SELECTED_MENU =
  routeConfig.menus && routeConfig.menus.length ? [routeConfig.menus[0]] : [];
const DEFAULT_UNIQUE_MENUKEY = DEFAULT_SELECTED_MENU.length
  ? {
      [DEFAULT_SELECTED_MENU.path]: true,
    }
  : {};
let defaultState = {
  selectedMenu: Util.storage.getItem('MENU_SELECTED_MENU')
    ? Util.storage.getItem('MENU_SELECTED_MENU')
    : DEFAULT_SELECTED_MENU,
  uniqueMenuKey: Util.storage.getItem('MENU_UNIQUE_MENUKEY')
    ? Util.storage.getItem('MENU_UNIQUE_MENUKEY')
    : DEFAULT_UNIQUE_MENUKEY,
};
//  菜单数据源
export const menuData = (state = defaultState, action = {}) => {
  let selectedMenu = state.selectedMenu;
  let currentMenu = action.currentMenu;
  let uniqueMenuKey = state.uniqueMenuKey;
  switch (action.type) {
    case actionType.MENU_ADDMENU: {
      if (!uniqueMenuKey[currentMenu.path]) {
        selectedMenu.push(currentMenu);
        uniqueMenuKey[currentMenu.path] = true;
      }
      Util.storage.setItem('MENU_SELECTED_MENU', selectedMenu);
      Util.storage.setItem('MENU_UNIQUE_MENUKEY', uniqueMenuKey);
      return {
        ...state,
        selectedMenu: selectedMenu,
      };
    }
    case actionType.MENU_DELETEMENU: {
      let resultMenu = Util.deleteValue(selectedMenu, currentMenu);
      uniqueMenuKey[currentMenu.path] = false;
      Util.storage.setItem('MENU_SELECTED_MENU', resultMenu);
      Util.storage.setItem('MENU_UNIQUE_MENUKEY', uniqueMenuKey);
      return {
        ...state,
        selectedMenu: resultMenu,
      };
    }
    case actionType.MENU_INITSTATE: {
      return defaultState;
    }

    default: {
      return state;
    }
  }
};
