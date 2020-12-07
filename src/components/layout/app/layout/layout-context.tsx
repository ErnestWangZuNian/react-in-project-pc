import routes from "@/routes/config";
import React from 'react';

interface menusConfig {
  theme: string;
  mode: string;
  openKeys: string[];
  selectedKeys: string[];
  onClick: () => any;
  onOpenChange: () => any;
}

interface sliderConfig{
  collapsible: boolean,
  collapsed: boolean,
  trigger: boolean,
  toggleCollapsed: () => any
}

export const routeConfig = routes;
export const menusConfig: menusConfig = {
  theme: "dark",
  mode: "inline",
  openKeys: [],
  selectedKeys: [],
  onClick: () => {},
  onOpenChange: () => {},
};
export const sliderConfig: sliderConfig= {
  collapsible: true,
  collapsed: false,
  trigger: false,
  toggleCollapsed: () => {},
};
export const LayoutContext = React.createContext({
  menusConfig,
  sliderConfig,
  menusList: routeConfig.menus || [],
});
