<template>
    <div class="layout">
        <el-container>
            <el-header height="62px">
                <div class="layout-header-logo-img-block">
                    <el-image class="layout-header-logo-img" :src="layoutLogoImgSrc" />
                </div>
                <div class="layout-header-menu-block">
                    <el-button class="layout-header-menu-drawer-btn" size="small" type="primary"
                        icon="el-icon-s-fold"></el-button>

                    <el-menu class="layout-header-menu-h-menu" :default-active="activeMenuIndex" mode="horizontal"
                        background-color="#303641" text-color="#92A0B1" active-text-color="#FFFFFF">
                        <el-menu-item class="layout-header-menu-h-menu-item" index="1">BiliBili-BI</el-menu-item>
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
                <el-aside width="210px">Aside</el-aside>
                <el-main>Main</el-main>
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
            <span class="progress-desc">用户空间CPU使用率</span>
            <el-progress :percentage="cpuStatus.userSpaceUsageRate" stroke-width="10" text-color="#A5ADBC"/>
            <span class="progress-desc">系统空间CPU使用率</span>
            <el-progress :percentage="cpuStatus.systemSpaceUsageRate" stroke-width="10" text-color="#A5ADBC"/>
            <span class="progress-desc">空闲CPU</span>
            <el-progress :percentage="cpuStatus.idleRate" stroke-width="10" text-color="#A5ADBC"/>
            <span class="progress-desc">CPU运行时等待IO</span>
            <el-progress :percentage="cpuStatus.ioBlockRuntime" stroke-width="10" text-color="#A5ADBC"/>
        </el-dialog>

        <el-dialog title="内存监控" :visible.sync="memoryDialogVisible" width="20%" center>
            <span class="progress-desc">总内存</span>
            <el-progress :percentage="memoryStatus.totalSize" stroke-width="10" text-color="#A5ADBC" :format="memoryProgressFormat"/>
            <span class="progress-desc">已使用内存</span>
            <el-progress :percentage="memoryStatus.usedSize" stroke-width="10" text-color="#A5ADBC" :format="memoryProgressFormat"/>
            <span class="progress-desc">未使用内存</span>
            <el-progress :percentage="memoryStatus.notUsedSize" stroke-width="10" text-color="#A5ADBC" :format="memoryProgressFormat"/>
        </el-dialog>

        <el-dialog title="磁盘监控" :visible.sync="diskDialogVisible" width="20%" center>
            <span class="progress-desc">总磁盘</span>
            <el-progress :percentage="diskStatus.totalSize" stroke-width="10" text-color="#A5ADBC" :format="diskProgressFormat"/>
            <span class="progress-desc">已使用磁盘</span>
            <el-progress :percentage="diskStatus.usedSize" stroke-width="10" text-color="#A5ADBC" :format="diskProgressFormat"/>
            <span class="progress-desc">未使用磁盘</span>
            <el-progress :percentage="diskStatus.notUsedSize" stroke-width="10" text-color="#A5ADBC" :format="diskProgressFormat"/>
        </el-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            activeMenuIndex: '1',

            layoutLogoImgSrc: require('@/assets/logo.png'),
            noticeImgSrc: require('@/assets/notice.svg'),
            cpuImgSrc: require('@/assets/cpu.svg'),
            memoryImgSrc: require('@/assets/memory.svg'),
            diskImgSrc: require('@/assets/disk.svg'),
            userImgSrc: require('@/assets/user.svg'),

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
            }
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
}

.el-main {
    background-color: #353C48;
}

.progress-desc {
    color: #A5ADBC;
}
</style>
  