export default [
    {
        //登录
        path: '/login',
        name: 'login',
        component: () => import('@spider/views/login/index.vue'),
    },
    {
        //报错
        path: '/error',
        name: 'error',
        component: () => import('@spider/views/error/index.vue'),
    },
    {
        path: '/',
        name: 'layout',
        component: () => import('@layout/index.vue'),
        children: [
            {
                //仪表盘
                path: '',
                name: 'dashboard',
                component: () => import('@spider/views/dashboard/index.vue'),
            },

            {
                //仪表盘
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('@spider/views/dashboard/index.vue'),
            },

            //样本与实例
            {
                //样本
                path: 'sampleAndInstance/sample',
                name: 'sample',
                component: () => import('@spider/views/sampleAndInstance/sample/index.vue'),
            },
            {
                //实例
                path: 'sampleAndInstance/instance',
                name: 'instance',
                component: () => import('@spider/views/sampleAndInstance/instance/index.vue'),
            },
            {
                //步骤
                path: 'sampleAndInstance/step',
                name: 'step',
                component: () => import('@spider/views/sampleAndInstance/step/index.vue'),
            },

            //实例数据
            //bilibili
            {
                //视频
                path: 'instanceData/bilibili/video',
                name: 'instanceDataBiliBiliVideo',
                component: () => import('@spider/views/instanceData/bilibili/video/index.vue'),
            },
            {
                //评论
                path: 'instanceData/bilibili/comment',
                name: 'instanceDataBiliBiliComment',
                component: () => import('@spider/views/instanceData/bilibili/comment/index.vue'),
            },
            {
                //弹幕
                path: 'instanceData/bilibili/danmu',
                name: 'instanceDataBiliBiliDanmu',
                component: () => import('@spider/views/instanceData/bilibili/danmu/index.vue'),
            },
            {
                //用户
                path: 'instanceData/bilibili/user',
                name: 'instanceDataBiliBiliUser',
                component: () => import('@spider/views/instanceData/bilibili/user/index.vue'),
            },

            {
                //运行日志
                path: 'runtimeLog',
                name: 'runtimeLog',
                component: () => import('@spider/views/runtimeLog/index.vue'),
            },
            {
                //运行状态监控
                path: 'runtimeMonitor',
                name: 'runtimeMonitor',
                component: () => import('@spider/views/runtimeMonitor/index.vue'),
            },
            {
                //IP代理池日志
                path: 'ipAgent',
                name: 'ipAgent',
                component: () => import('@spider/views/ipAgent/index.vue'),
            },
            {
                //UA池
                path: 'userAgent',
                name: 'userAgent',
                component: () => import('@spider/views/userAgent/index.vue'),
            },
            {
                //通知日志
                path: 'notificationLog',
                name: 'notificationLog',
                component: () => import('@spider/views/notificationLog/index.vue'),
            },
        ]
    },
    {
        path: '*',
        redirect: "/",
    },
]