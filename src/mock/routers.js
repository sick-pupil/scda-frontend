export default [
    {
        //仪表盘
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
    },
    {
        //样本与实例
        path: '/sampleAndInstance',
        name: 'sampleAndInstance',
        component: () => import('@/views/sampleAndInstance/index.vue'),
        children: [
            {
                //样本
                path: 'sample',
                name: 'sample',
                component: () => import('@/views/sampleAndInstance/sample/index.vue'),
            },
            {
                //实例
                path: 'instance',
                name: 'instance',
                component: () => import('@/views/sampleAndInstance/instance/index.vue'),
            },
            {
                //步骤
                path: 'step',
                name: 'step',
                component: () => import('@/views/sampleAndInstance/step/index.vue'),
            }
        ],
    },
    {
        //实例数据
        path: '/instanceData',
        component: () => import('@/views/instanceData/index.vue'),
        children: [
            {
                //BiliBili
                path: 'bilibili',
                name: 'bilibili',
                component: () => import('@/views/instanceData/bilibili/index.vue'),
                children: [
                    {
                        //视频
                        path: 'video',
                        name: 'video',
                        component: () => import('@/views/instanceData/bilibili/video/index.vue'),
                    },
                    {
                        //评论
                        path: 'comment',
                        name: 'comment',
                        component: () => import('@/views/instanceData/bilibili/comment/index.vue'),
                    },
                    {
                        //弹幕
                        path: 'danmu',
                        name: 'danmu',
                        component: () => import('@/views/instanceData/bilibili/danmu/index.vue'),
                    },
                    {
                        //用户
                        path: 'user',
                        name: 'user',
                        component: () => import('@/views/instanceData/bilibili/user/index.vue'),
                    },
                ],
            },
        ],
    },
    {
        //运行日志
        path: '/runtimeLog',
        name: 'runtimeLog',
        component: () => import('@/views/runtimeLog/index.vue'),
    },
    {
        //运行状态监控
        path: '/runtimeMonitor',
        name: 'runtimeMonitor',
        component: () => import('@/views/runtimeMonitor/index.vue'),
    },
    {
        //IP代理池
        path: '/ipAgent',
        name: 'ipAgent',
        component: () => import('@/views/ipAgent/index.vue'),
    },
    {
        //UA池
        path: '/userAgent',
        name: 'userAgent',
        component: () => import('@/views/userAgent/index.vue'),
    },
    {
        //通知日志
        path: '/notificationLog',
        name: 'notificationLog',
        component: () => import('@/views/notificationLog/index.vue'),
    },
    {
        //登录
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
    },
    {
        path: '/401',
        component: () => import('@/views/401/index.vue'),
    },
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '*',
        redirect: "/",
    },
]