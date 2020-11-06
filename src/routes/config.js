import { AsyncComponent } from 'wzn-base-components';
import methods from './methods';

const Demo = AsyncComponent(() => import('@/pages/demo'));
const App = AsyncComponent(() => import('@/pages/app'));

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
            component: Demo,
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
    component: Demo,
    icon: 'tag',
  },
  {
    name: '标签管理',
    path: '/tag',
    component: Demo,
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
