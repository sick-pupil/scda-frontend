<template>
    <div class="layout">
        <el-container class="layout-container">
            <el-header height="62px">
                <div class="layout-header-logo-img-block">
                    <el-image class="layout-header-logo-img" :src="layoutLogoImgSrc" />
                </div>
                <div class="layout-header-menu-block">
                    <el-button class="layout-header-menu-drawer-btn" size="small" type="primary"
                        icon="el-icon-s-fold"></el-button>

                    <el-menu class="layout-header-menu-h-menu" :default-active="activeMenuIndex" mode="horizontal"
                        background-color="#303641" text-color="#92A0B1" active-text-color="#FFFFFF">
                        <el-menu-item class="layout-header-menu-h-menu-item" index="1"
                            @click="goToPage('spider')">BiliBili-BI</el-menu-item>
                        <el-menu-item class="layout-header-menu-h-menu-item" index="2">爬虫管理</el-menu-item>
                        <el-menu-item class="layout-header-menu-h-menu-item" index="3">基础管理</el-menu-item>
                    </el-menu>

                    <el-input class="layout-header-menu-search-btn" placeholder="搜索菜单" />

                    <div class="layout-header-menu-btns-block">
                        <el-image class="layout-header-menu-btns" :src="noticeImgSrc" @click="showNoticeDialog" />
                        <el-image class="layout-header-menu-btns" :src="cpuImgSrc" @click="showCpuDialog" />
                        <el-image class="layout-header-menu-btns" :src="memoryImgSrc" @click="showMemeryDialog" />
                        <el-image class="layout-header-menu-btns" :src="diskImgSrc" @click="showDiskDialog" />
                        <el-image class="layout-header-menu-btns" :src="userImgSrc" @click="showUserDialog" />
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="210px">
                    <el-menu class="layout-sider-menu-v-menu" :default-active="activeMenuIndex"
                        background-color="#303641" text-color="#92A0B1" active-text-color="#FFFFFF"
                        :default-openeds="layoutSiderMenuOpenStatus">

                        <el-menu-item index="1">
                            <el-image class="layout-sider-menu-icon" :src="dashboardMenuImgSrc" />
                            &nbsp;
                            <span slot="title">仪表盘</span>
                        </el-menu-item>

                        <el-submenu index="2">
                            <template slot="title">
                                <el-image class="layout-sider-menu-icon" :src="sampleAndInstanceMenuImgSrc" />
                                &nbsp;
                                <span>样本与实例</span>
                            </template>
                            <el-menu-item index="2-1">
                                <el-image class="layout-sider-menu-icon" :src="sampleMenuImgSrc" />
                                &nbsp;
                                <span slot="title">样本</span>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <el-image class="layout-sider-menu-icon" :src="instanceMenuImgSrc" />
                                &nbsp;
                                <span slot="title">实例</span>
                            </el-menu-item>
                            <el-menu-item index="2-3">
                                <el-image class="layout-sider-menu-icon" :src="stepMenuImgSrc" />
                                &nbsp;
                                <span slot="title">步骤</span>
                            </el-menu-item>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                                <el-image class="layout-sider-menu-icon" :src="instanceDataMenuImgSrc" />
                                &nbsp;
                                <span>实例数据</span>
                            </template>
                            <el-submenu index="3-1">
                                <template slot="title">
                                    <el-image class="layout-sider-menu-icon" :src="bilibiliMenuImgSrc" />
                                    &nbsp;
                                    <span>BiliBili</span>
                                </template>
                                <el-menu-item index="3-1-1">
                                    <el-image class="layout-sider-menu-icon" :src="videoMenuImgSrc" />
                                    &nbsp;
                                    <span slot="title">视频</span>
                                </el-menu-item>
                                <el-menu-item index="3-1-2">
                                    <el-image class="layout-sider-menu-icon" :src="commentMenuImgSrc" />
                                    &nbsp;
                                    <span slot="title">评论</span>
                                </el-menu-item>
                                <el-menu-item index="3-1-3">
                                    <el-image class="layout-sider-menu-icon" :src="danmuMenuImgSrc" />
                                    &nbsp;
                                    <span slot="title">弹幕</span>
                                </el-menu-item>
                                <el-menu-item index="3-1-4">
                                    <el-image class="layout-sider-menu-icon" :src="userMenuImgSrc" />
                                    &nbsp;
                                    <span slot="title">用户</span>
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>

                        <el-menu-item index="4">
                            <el-image class="layout-sider-menu-icon" :src="runtimeLogMenuImgSrc" />
                            &nbsp;
                            <span slot="title">运行日志</span>
                        </el-menu-item>

                        <el-menu-item index="5">
                            <el-image class="layout-sider-menu-icon" :src="runtimeMonitorMenuImgSrc" />
                            &nbsp;
                            <span slot="title">运行状态监控</span>
                        </el-menu-item>

                        <el-menu-item index="6">
                            <el-image class="layout-sider-menu-icon" :src="ipAgentMenuImgSrc" />
                            &nbsp;
                            <span slot="title">IP代理池</span>
                        </el-menu-item>

                        <el-menu-item index="7">
                            <el-image class="layout-sider-menu-icon" :src="userAgentMenuImgSrc" />
                            &nbsp;
                            <span slot="title">UA池</span>
                        </el-menu-item>

                        <el-menu-item index="8">
                            <el-image class="layout-sider-menu-icon" :src="notificationLogMenuImgSrc" />
                            &nbsp;
                            <span slot="title">通知日志</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    </el-breadcrumb>
                    &nbsp;
                    <router-view />
                </el-main>
            </el-container>
        </el-container>

        <el-dialog title="通知" :visible.sync="noticeDialogVisible" width="40%" center>
            <el-table :data="noticeDialogTableData">
                <el-table-column type="index" width="50" />
                <el-table-column property="time" label="时间" width="180" />
                <el-table-column property="channel" label="渠道" width="50" />
                <el-table-column property="content" label="内容" />
            </el-table>
            <span slot="footer">
                <el-pagination background layout="prev, pager, next" :total="1000" />
            </span>
        </el-dialog>

        <el-dialog title="CPU监控" :visible.sync="cpuDialogVisible" width="20%" center>
            <el-dropdown style="float: right;">
                <el-button type="primary" size="mini">
                    节点<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>节点1</el-dropdown-item>
                    <el-dropdown-item>节点2</el-dropdown-item>
                    <el-dropdown-item>节点3</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <br /><br />
            <p class="progress-desc">用户空间CPU使用率</p>
            <el-progress :percentage="cpuStatus.userSpaceUsageRate" stroke-width="10" text-color="#A5ADBC" />
            <p class="progress-desc">系统空间CPU使用率</p>
            <el-progress :percentage="cpuStatus.systemSpaceUsageRate" stroke-width="10" text-color="#A5ADBC" />
            <p class="progress-desc">空闲CPU</p>
            <el-progress :percentage="cpuStatus.idleRate" stroke-width="10" text-color="#A5ADBC" />
            <p class="progress-desc">CPU运行时等待IO</p>
            <el-progress :percentage="cpuStatus.ioBlockRuntime" stroke-width="10" text-color="#A5ADBC" />
        </el-dialog>

        <el-dialog title="内存监控" :visible.sync="memoryDialogVisible" width="20%" center>
            <el-dropdown style="float: right;">
                <el-button type="primary" size="mini">
                    节点<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>节点1</el-dropdown-item>
                    <el-dropdown-item>节点2</el-dropdown-item>
                    <el-dropdown-item>节点3</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <br /><br />
            <p class="progress-desc">总内存</p>
            <el-progress :percentage="memoryStatus.totalSize" stroke-width="10" text-color="#A5ADBC"
                :format="memoryProgressFormat" />
            <p class="progress-desc">已使用内存</p>
            <el-progress :percentage="memoryStatus.usedSize" stroke-width="10" text-color="#A5ADBC"
                :format="memoryProgressFormat" />
            <p class="progress-desc">未使用内存</p>
            <el-progress :percentage="memoryStatus.notUsedSize" stroke-width="10" text-color="#A5ADBC"
                :format="memoryProgressFormat" />
        </el-dialog>

        <el-dialog title="磁盘监控" :visible.sync="diskDialogVisible" width="20%" center>
            <el-dropdown style="float: right;">
                <el-button type="primary" size="mini">
                    节点<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>节点1</el-dropdown-item>
                    <el-dropdown-item>节点2</el-dropdown-item>
                    <el-dropdown-item>节点3</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <br /><br />
            <p class="progress-desc">总磁盘</p>
            <el-progress :percentage="diskStatus.totalSize" stroke-width="10" text-color="#A5ADBC"
                :format="diskProgressFormat" />
            <p class="progress-desc">已使用磁盘</p>
            <el-progress :percentage="diskStatus.usedSize" stroke-width="10" text-color="#A5ADBC"
                :format="diskProgressFormat" />
            <p class="progress-desc">未使用磁盘</p>
            <el-progress :percentage="diskStatus.notUsedSize" stroke-width="10" text-color="#A5ADBC"
                :format="diskProgressFormat" />
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeMenuIndex: '1',

            layoutLogoImgSrc: require('@/pages/spider/assets/logo.png'),
            noticeImgSrc: require('@/pages/spider/assets/layout/notice.svg'),
            cpuImgSrc: require('@/pages/spider/assets/layout/cpu.svg'),
            memoryImgSrc: require('@/pages/spider/assets/layout/memory.svg'),
            diskImgSrc: require('@/pages/spider/assets/layout/disk.svg'),
            userImgSrc: require('@/pages/spider/assets/layout/user.svg'),

            noticeDialogVisible: false,
            cpuDialogVisible: false,
            memoryDialogVisible: false,
            diskDialogVisible: false,

            noticeDialogTableData: [
                {
                    time: '2016-05-02 11:11:11',
                    channel: '微信',
                    content: '上海市普陀区金沙江路 1518 弄 的首发式地方',
                },
                {
                    time: '2016-05-04 11:11:11',
                    channel: 'QQ',
                    content: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    time: '2016-05-01 11:11:11',
                    channel: '短信',
                    content: '上海市普陀区金沙江路 1518 弄的发放然后把v女发生的v现场v...'
                },
                {
                    time: '2016-05-03 11:11:11',
                    channel: '短信',
                    content: '上海市普陀区金沙江路'
                }
            ],

            cpuStatus: {
                userSpaceUsageRate: 30,
                systemSpaceUsageRate: 70,
                idleRate: 99,
                ioBlockRuntime: 0,
            },

            memoryStatus: {
                totalSize: 10,
                usedSize: 3,
                notUsedSize: 7,
            },

            diskStatus: {
                totalSize: 10,
                usedSize: 3,
                notUsedSize: 7,
            },

            dashboardMenuImgSrc: require('@/pages/spider/assets/menu-icon/dashboard.png'),

            sampleAndInstanceMenuImgSrc: require('@/pages/spider/assets/menu-icon/sampleAndInstance.png'),
            sampleMenuImgSrc: require('@/pages/spider/assets/menu-icon/sample.png'),
            instanceMenuImgSrc: require('@/pages/spider/assets/menu-icon/instance.png'),
            stepMenuImgSrc: require('@/pages/spider/assets/menu-icon/step.png'),

            instanceDataMenuImgSrc: require('@/pages/spider/assets/menu-icon/instanceData.png'),
            bilibiliMenuImgSrc: require('@/pages/spider/assets/menu-icon/bilibili.png'),
            videoMenuImgSrc: require('@/pages/spider/assets/menu-icon/video.png'),
            commentMenuImgSrc: require('@/pages/spider/assets/menu-icon/comment.png'),
            danmuMenuImgSrc: require('@/pages/spider/assets/menu-icon/danmu.png'),
            userMenuImgSrc: require('@/pages/spider/assets/menu-icon/user.png'),

            runtimeLogMenuImgSrc: require('@/pages/spider/assets/menu-icon/runtimeLog.png'),
            runtimeMonitorMenuImgSrc: require('@/pages/spider/assets/menu-icon/runtimeMonitor.png'),
            ipAgentMenuImgSrc: require('@/pages/spider/assets/menu-icon/ipAgent.png'),
            userAgentMenuImgSrc: require('@/pages/spider/assets/menu-icon/userAgent.png'),
            notificationLogMenuImgSrc: require('@/pages/spider/assets/menu-icon/notificationLog.png'),

            layoutSiderMenuOpenStatus: ['2', '3', '3-1',]
        }
    },
    methods: {
        showNoticeDialog() {
            this.noticeDialogVisible = !this.noticeDialogVisible;
        },
        showCpuDialog() {
            this.cpuDialogVisible = !this.cpuDialogVisible;
        },
        showMemeryDialog() {
            this.memoryDialogVisible = !this.memoryDialogVisible;
        },
        showDiskDialog() {
            this.diskDialogVisible = !this.diskDialogVisible;
        },
        showUserDialog() {

        },

        memoryProgressFormat(num) {
            return `${num}GB`;
        },
        diskProgressFormat(num) {
            return `${num}GB`;
        },

        goToPage(page) {
            window.location.href = `/${page}.html`; // 直接跳转到对应的 HTML 页面
        }
    }
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    width: 100%;
    background-color: #353C48;
}

.layout-container {
    height: 100%;
    width: 100%;
}

.el-header {
    background-color: #303641;
    border-bottom: 1px solid #242831;
    padding: 0px;
    display: flex;

    .layout-header-logo-img-block {
        height: 100%;
        width: 209px;
        border-right: 1px solid #242831;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .layout-header-logo-img {
            width: 147px;
            height: 44px;
        }
    }

    .layout-header-menu-block {
        flex-grow: 1;
        width: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 5px 25px 5px 25px;

        .layout-header-menu-drawer-btn {
            margin-right: 20px;
        }

        .layout-header-menu-h-menu {
            flex-grow: 1;
            border-bottom: 0px;

            .layout-header-menu-h-menu-item {
                border: 0px;
            }
        }

        .layout-header-menu-search-btn {
            width: 120px;
            margin-right: 20px;
        }

        .layout-header-menu-btns-block {
            width: 160px;
            height: 70%;
            border-radius: 20px;
            background-color: #252A32;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 3px 5px 3px 5px;

            .layout-header-menu-btns {
                cursor: pointer;
                width: 25px;
                height: 25px;
            }
        }
    }
}

.el-aside {
    background-color: #353C48;
    border-right: 1px solid #242831;

    .layout-sider-menu-v-menu {
        border-right: 0px;

        .layout-sider-menu-icon {
            width: 20px;
            height: 20px;
        }
    }
}

.el-main {
    background-color: #353C48;
}

.progress-desc {
    margin: 0px;
    color: #A5ADBC;
}
</style>