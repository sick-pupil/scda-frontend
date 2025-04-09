<template>
    <div class="dashboard">
        <el-collapse v-model="activeCollapse" accordion>
            <el-collapse-item title="BILIBILI" name="BILIBILI">
                <div class="statistics-card-group-block">
                    <el-card class="statistics-card-block">
                        <el-image class="statistics-card-block-img" :src="videoStatisticsCardImgSrc" />
                        <div class="statistics-card-block-text">
                            <span class="statistics-card-block-text-left">抓取视频</span>
                            <span class="statistics-card-block-text-right">3500</span>
                        </div>

                        <div class="statistics-card-block-top-right-corner-increasement">
                            <span class="statistics-card-block-top-right-corner-label-text">+5%</span>
                            <el-image class="statistics-card-block-top-right-corner-label-img"
                                :src="labelStatisticsCardImgSrc" />
                        </div>
                    </el-card>

                    <el-card class="statistics-card-block">
                        <el-image class="statistics-card-block-img" :src="danmuStatisticsCardImgSrc" />
                        <div class="statistics-card-block-text">
                            <span class="statistics-card-block-text-left">抓取弹幕</span>
                            <span class="statistics-card-block-text-right">3500</span>
                        </div>

                        <div class="statistics-card-block-top-right-corner-increasement">
                            <span class="statistics-card-block-top-right-corner-label-text">+5%</span>
                            <el-image class="statistics-card-block-top-right-corner-label-img"
                                :src="labelStatisticsCardImgSrc" />
                        </div>
                    </el-card>

                    <el-card class="statistics-card-block">
                        <el-image class="statistics-card-block-img" :src="userStatisticsCardImgSrc" />
                        <div class="statistics-card-block-text">
                            <span class="statistics-card-block-text-left">抓取用户</span>
                            <span class="statistics-card-block-text-right">3500</span>
                        </div>

                        <div class="statistics-card-block-top-right-corner-increasement">
                            <span class="statistics-card-block-top-right-corner-label-text">+8%</span>
                            <el-image class="statistics-card-block-top-right-corner-label-img"
                                :src="labelStatisticsCardImgSrc" />
                        </div>
                    </el-card>

                    <el-card class="statistics-card-block">
                        <el-image class="statistics-card-block-img" :src="commentStatisticsCardImgSrc" />
                        <div class="statistics-card-block-text">
                            <span class="statistics-card-block-text-left">抓取评论</span>
                            <span class="statistics-card-block-text-right">3500</span>
                        </div>

                        <div class="statistics-card-block-top-right-corner-increasement">
                            <span class="statistics-card-block-top-right-corner-label-text">+15%</span>
                            <el-image class="statistics-card-block-top-right-corner-label-img"
                                :src="labelStatisticsCardImgSrc" />
                        </div>
                    </el-card>

                    <el-card class="statistics-card-block">
                        <el-image class="statistics-card-block-img" :src="spiderStatisticsCardImgSrc" />
                        <div class="statistics-card-block-text">
                            <span class="statistics-card-block-text-left">运行实例</span>
                            <span class="statistics-card-block-text-right">10</span>
                        </div>

                        <div class="statistics-card-block-top-right-corner-tick-cross">
                            <span class="statistics-card-block-top-right-corner-tick-cross-text">15</span>
                            <el-image class="statistics-card-block-top-right-corner-tick-cross-img"
                                :src="tickStatisticsCardImgSrc" />
                            <span class="statistics-card-block-top-right-corner-tick-cross-text">15</span>
                            <el-image class="statistics-card-block-top-right-corner-tick-cross-img"
                                :src="crossStatisticsCardImgSrc" />
                        </div>
                    </el-card>
                </div>

                <div class="user-video-analyse-chart-block">
                    <div id="leftChart" :style="{ width: '42%', height: '100%' }"></div>
                    <div class="user-video-analyse-chart-block-middle">
                        <p class="user-video-analyse-chart-block-middle-title">已分析用户与视频</p>
                        <p style="text-align: center;">
                            <span class="user-video-analyse-chart-block-middle-num">3500</span>
                            <br />
                            <span class="user-video-analyse-chart-block-middle-desc">用户</span>
                        </p>
                        <p style="text-align: center;">
                            <span class="user-video-analyse-chart-block-middle-num">3500</span>
                            <br />
                            <span class="user-video-analyse-chart-block-middle-desc">视频</span>
                        </p>
                    </div>
                    <div id="rightChart" :style="{ width: '42%', height: '100%' }"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="抖音" name="douyin">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="淘宝" name="taobao">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="NGA" name="NGA">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeCollapse: ['BILIBILI'],
            videoStatisticsCardImgSrc: require('@/assets/dashboard/video.png'),
            danmuStatisticsCardImgSrc: require('@/assets/dashboard/danmu.png'),
            userStatisticsCardImgSrc: require('@/assets/dashboard/user.png'),
            commentStatisticsCardImgSrc: require('@/assets/dashboard/comment.png'),
            spiderStatisticsCardImgSrc: require('@/assets/dashboard/spider.png'),
            labelStatisticsCardImgSrc: require('@/assets/dashboard/label.png'),
            tickStatisticsCardImgSrc: require('@/assets/dashboard/tick.png'),
            crossStatisticsCardImgSrc: require('@/assets/dashboard/cross.png'),
        }
    },
    mounted() {
        this.initEcharts()
    },
    methods: {
        initEcharts() {
            var leftChart = this.$echarts.init(document.getElementById('leftChart'))
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            };
            window.onresize = leftChart.resize;
            leftChart.setOption(option);

            var rightChart = this.$echarts.init(document.getElementById('rightChart'))
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            };
            window.onresize = rightChart.resize;
            rightChart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
.statistics-card-group-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    width: 100%;
    height: 100%;

    .statistics-card-block {
        width: 300px;
        height: 110px;

        position: relative;

        .statistics-card-block-img {
            width: 50px;
            height: 50px;
        }

        .statistics-card-block-text {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .statistics-card-block-text-left {
                font-size: 14px;
                color: #92A0B1;
                float: left;
            }

            .statistics-card-block-text-right {
                font-size: 25px;
                color: #3EAAD1;
                float: right;
            }
        }

        .statistics-card-block-top-right-corner-increasement {
            position: absolute;
            top: 5px;
            right: 5px;

            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;

            .statistics-card-block-top-right-corner-label-text {
                font-size: 14px;
                color: #3EAAD1;
            }

            .statistics-card-block-top-right-corner-label-img {
                width: 20px;
                height: 20px;
            }
        }

        .statistics-card-block-top-right-corner-tick-cross {
            position: absolute;
            top: 5px;
            right: 5px;

            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            .statistics-card-block-top-right-corner-tick-cross-text {
                font-size: 14px;
                color: #3EAAD1;
            }

            .statistics-card-block-top-right-corner-tick-cross-img {
                width: 20px;
                height: 20px;
            }
        }
    }
}

.user-video-analyse-chart-block {
    border-radius: 10px;
    background-color: #303641;
    width: 100%;
    height: 400px;
    margin: 30px 0px 30px 0px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    .user-video-analyse-chart-block-middle {
        border: 1px solid #797979;
        border-radius: 10px;

        width: 15%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .user-video-analyse-chart-block-middle-title {
            font-size: 20px;
            color: #A5ADBC;
            margin: 0px;
        }

        .user-video-analyse-chart-block-middle-num {
            font-size: 30px;
            color: #3EAAD1;
            margin: 0px;
        }

        .user-video-analyse-chart-block-middle-desc {
            font-size: 14px;
            color: #A5ADBC;
            margin: 0px;
        }
    }
}
</style>