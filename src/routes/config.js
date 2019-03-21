export default {
  // 菜单相关路由
  menus: [{
      path: '/back/index',
      title: '首页',
      icon: 'mobile',
      component: 'App',
      meta: {
        auths: ['receichain/finance']
      }
    },
    {
      path: '/back/ui',
      title: '信用通',
      icon: 'mobile',
      meta: {
        auths: ['receichain/finance']
      },
      children: [{
          path: '/back/ui/buttons',
          title: '账户管理',
          component: 'About',
          children: [{
            path: '/back/ui/buttons/detail',
            title: '账户管理详情',
            component: 'About',
            children: [{
              path: '/back/ui/buttons/detail/11',
              title: '账户管理详情11',
              component: 'App'
            }]
          }]
        },
        {
          path: '/back/ui/1',
          title: '开票管理',
          component: 'About',
          icon: 'mobile',
          meta: {
            auths: ['abc']
          }
        },
        {
          path: "/back/ui/user",
          title: "用户管理",
          component: "User",
          icon: "mobile"
        },
        {
          path: '/back/ui/3',
          title: '角色管理',
          component: 'About',
          icon: 'mobile'
        }
      ]
    }
  ],
  // 非菜单相关路由
  auths: ['receichain/finance', 'receichain/progress', 'receichain/repay']
};