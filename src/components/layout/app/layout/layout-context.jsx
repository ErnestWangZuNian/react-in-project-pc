import routes from '@/routes/config';

export const routeConfig = routes;
export const menusConfig = {
  theme: 'dark',
  mode: 'inline',
  openKeys: [],
  selectedKeys: [],
  onClick: () => {},
  onOpenChange: () => {},
};
export const sliderConfig = {
  collapsible: true,
  collapsed: false,
  trigger: null,
  toggleCollapsed: () => {},
};
export const LayoutContext = React.createContext({
  menusConfig,
  sliderConfig,
  menusList: routeConfig.menus || [],
});
