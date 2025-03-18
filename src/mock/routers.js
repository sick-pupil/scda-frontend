export default [
    {
        //仪表盘
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
    },
    {
        //样本与实例
        path: '/sampleAndInstance',
        name: 'sampleAndInstance',
        component: () => import('@/views/sampleAndInstance'),
        children: [
            {
                //样本
                path: '/sample',
                name: 'sample',
                component: () => import('@/views/sampleAndInstance/sample'),
            },
            {
                //实例
                path: '/instance',
                name: 'instance',
                component: () => import('@/views/sampleAndInstance/instance'),
            },
            {
                //步骤
                path: '/step',
                name: 'step',
                component: () => import('@/views/sampleAndInstance/step'),
            }
        ],
    },
    {
        //实例数据
        path: '/instanceData',
        component: () => import('@/views/instanceData'),
        children: [
            {
                //BiliBili
                path: '/bilibili',
                name: 'bilibili',
                component: () => import('@/views/instanceData/bilibili'),
                children: [
                    {
                        //视频
                        path: '/video',
                        name: 'video',
                        component: () => import('@/views/instanceData/bilibili/video'),
                    },
                    {
                        //评论
                        path: '/comment',
                        name: 'comment',
                        component: () => import('@/views/instanceData/bilibili/comment'),
                    },
                    {
                        //弹幕
                        path: '/danmu',
                        name: 'danmu',
                        component: () => import('@/views/instanceData/bilibili/danmu'),
                    },
                    {
                        //用户
                        path: '/user',
                        name: 'user',
                        component: () => import('@/views/instanceData/bilibili/user'),
                    },
                ],
            },
        ],
    },
    {
        //运行日志
        path: '/runtimeLog',
        name: 'runtimeLog',
        component: () => import('@/views/runtimeLog'),
    },
    {
        //运行状态监控
        path: '/runtimeMonitor',
        name: 'runtimeMonitor',
        component: () => import('@/views/runtimeMonitor'),
    },
    {
        //IP代理池
        path: '/ipAgent',
        name: 'ipAgent',
        component: () => import('@/views/ipAgent'),
    },
    {
        //UA池
        path: '/userAgent',
        name: 'userAgent',
        component: () => import('@/views/userAgent'),
    },
    {
        //通知日志
        path: '/notificationLog',
        name: 'notificationLog',
        component: () => import('@/views/notificationLog'),
    }
]