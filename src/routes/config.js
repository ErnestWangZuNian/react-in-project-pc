export default {
    menus: [ // 菜单相关路由
        { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'App' },
        {
            key: '/app/ui', title: 'UI', icon: 'scan',
            subs: [
                { key: '/app/ui/buttons', title: '按钮', component: 'About'},
                { key: '/app/ui/test', title: '按钮', component: 'Test'}
            ]
        }
    ],
    others: [] // 非菜单相关路由
}