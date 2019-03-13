export default {
  // 菜单相关路由
  menus: [
    {
      path: "/back/index",
      title: "首页",
      icon: "mobile",
      component: "App"
    },
    {
      path: "/back/ui",
      title: "信用通",
      icon: "scan",
      children: [
        {
          path: "/back/ui/buttons",
          title: "账户管理",
          component: "About",
          children: [
            {
              path: "/back/ui/buttons/detail",
              title: "账户管理详情",
              component: "About",
              children: [
                {
                  path: "/back/ui/buttons/detail/11",
                  title: "账户管理详情11",
                  component: "App"
                }
              ]
            }
          ]
        },
        {
          path: "/back/ui/1",
          title: "开票管理",
          component: "About"
        },
        {
          path: "/back/ui/user",
          title: "用户管理",
          component: "About",
          matchs: [
            {
              path: "/back/ui/user/detail/:id",
              title: "用户管理详情",
              component: "App"
            },
            {
              path: "/back/ui/user/test/:id",
              title: "用户管理详情",
              component: "About"
            }
          ]
        },
        {
          path: "/back/ui/3",
          title: "角色管理",
          component: "About"
        }
      ]
    }
  ],
  // 非菜单相关路由
  others: []
};
