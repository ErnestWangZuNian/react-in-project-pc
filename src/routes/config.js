export default {
  // 菜单相关路由
  menus: [
    { key: "/back/index", title: "首页", icon: "mobile", component: "App" },
    {
      key: "/back/ui",
      title: "信用通",
      icon: "scan",
      subs: [
        { key: "/back/ui/buttons", title: "账户管理", component: "About" },
        { key: "/back/ui/1", title: "开票管理", component: "About" },
        {
          key: "/back/ui/user",
          title: "用户管理",
          component: "About",
          matchs: [
            {
              key: "/back/ui/user/detail/:id",
              title: "用户管理详情",
              component: "App"
            },
            {
              key: "/back/ui/user/test/:id",
              title: "用户管理详情",
              component: "About"
            }
          ]
        },
        { key: "/back/ui/3", title: "角色管理", component: "About" }
      ]
    }
  ],
  // 非菜单相关路由
  others: []
};
