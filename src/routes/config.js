/*
 * @Description:
 * @Author: Ernestwang
 * @Date: 2020-12-02 21:32:09
 * @LastEditTime: 2020-12-05 11:26:26
 * @LastEditors: Ernestwang
 */
import App from '@/pages/app';
import methods from './methods';

const menus = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
    component: App,
  },
  {
    name: '分类管理',
    path: '/test',
    component: App,
    icon: 'tag',
    children: [
      {
        name: '新增分类',
        path: '/add',
        icon: 'tag',
        children: [
          {
            name: '新增商品分类',
            path: '/shop',
            component: App,
            icon: 'tag',
          },
        ],
      },
      {
        name: '分类列表',
        path: '/list',
        icon: 'tag',
      },
    ],
  },
  {
    name: '文章管理',
    path: '/demo',
    component: App,
    icon: 'tag',
  },
  {
    name: '标签管理',
    path: '/tag',
    component: App,
    icon: 'tag',
  },
];

const routesConfig = {
  menus: methods.autoUpdatePath(menus),
  ...methods,
  initMenu: {
    name: '首页',
    path: '/',
  },
};
export default routesConfig;
