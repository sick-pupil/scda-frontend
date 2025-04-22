export default [
    {
        //登录
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        //报错
        path: '/error',
        name: 'error',
        component: () => import('@/views/error/index.vue'),
    },
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                //仪表盘
                path: '',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
            },

            {
                //仪表盘
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
            },

            //样本与实例
            {
                //样本
                path: 'sampleAndInstance/sample',
                name: 'sample',
                component: () => import('@/views/sampleAndInstance/sample/index.vue'),
            },
            {
                //实例
                path: 'sampleAndInstance/instance',
                name: 'instance',
                component: () => import('@/views/sampleAndInstance/instance/index.vue'),
            },
            {
                //步骤
                path: 'sampleAndInstance/step',
                name: 'step',
                component: () => import('@/views/sampleAndInstance/step/index.vue'),
            },

            //实例数据
            //bilibili
            {
                //视频
                path: 'instanceData/bilibili/video',
                name: 'instanceDataBiliBiliVideo',
                component: () => import('@/views/instanceData/bilibili/video/index.vue'),
            },
            {
                //评论
                path: 'instanceData/bilibili/comment',
                name: 'instanceDataBiliBiliComment',
                component: () => import('@/views/instanceData/bilibili/comment/index.vue'),
            },
            {
                //弹幕
                path: 'instanceData/bilibili/danmu',
                name: 'instanceDataBiliBiliDanmu',
                component: () => import('@/views/instanceData/bilibili/danmu/index.vue'),
            },
            {
                //用户
                path: 'instanceData/bilibili/user',
                name: 'instanceDataBiliBiliUser',
                component: () => import('@/views/instanceData/bilibili/user/index.vue'),
            },

            {
                //运行日志
                path: 'runtimeLog',
                name: 'runtimeLog',
                component: () => import('@/views/runtimeLog/index.vue'),
            },
            {
                //运行状态监控
                path: 'runtimeMonitor',
                name: 'runtimeMonitor',
                component: () => import('@/views/runtimeMonitor/index.vue'),
            },
            {
                //IP代理池日志
                path: 'ipAgent',
                name: 'ipAgent',
                component: () => import('@/views/ipAgent/index.vue'),
            },
            {
                //UA池
                path: 'userAgent',
                name: 'userAgent',
                component: () => import('@/views/userAgent/index.vue'),
            },
            {
                //通知日志
                path: 'notificationLog',
                name: 'notificationLog',
                component: () => import('@/views/notificationLog/index.vue'),
            },
        ]
    },
    {
        path: '*',
        redirect: "/",
    },
]