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
                    <div class="left-chart-block">
                        <div class="left-chart-right-top-btns">
                            <el-button type="primary" size="mini" @click="timeRangeClick">日</el-button>
                            <el-button type="primary" size="mini" @click="timeRangeClick">周</el-button>
                            <el-button type="primary" size="mini" @click="timeRangeClick">月</el-button>
                        </div>
                        <div id="left-chart"></div>
                    </div>
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
                    <div class="right-chart-block">
                        <div class="right-chart-right-top-btns">
                            <el-button type="primary" size="mini" @click="timeRangeClick">日</el-button>
                            <el-button type="primary" size="mini" @click="timeRangeClick">周</el-button>
                            <el-button type="primary" size="mini" @click="timeRangeClick">月</el-button>
                        </div>
                        <div id="right-chart"></div>
                    </div>
                </div>

                <div class="crawl-success-fail-chart-table-block">
                    <div class="crawl-success-fail-chart-block">
                        <div class="crawl-success-fail-chart-block-right-top-btns">
                            <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期"
                                end-placeholder="结束日期" size="mini" />
                        </div>
                        <div class="crawl-success-fail-pie-bar-chart-block">
                            <div id="left-pie-chart"></div>
                            <div id="right-bar-chart"></div>
                        </div>
                    </div>
                    <div class="crawl-success-fail-table-block">
                        <div class="crawl-success-fail-table-block-right-top-btns">
                            <span style="font-size: 18px;">抓取失败日志 总数：{{crawlFailNum}}</span>
                            <el-button type="primary" size="mini" @click="crawlDetailLogJump">详情</el-button>
                        </div>
                        <el-table class="crawl-success-fail-table" :data="tableData" border height="100%">
                            <el-table-column fixed prop="crawlId" label="抓取id"/>
                            <el-table-column prop="message" label="报错" :show-overflow-tooltip="true"/>
                            <el-table-column prop="targetUrl" label="目标URL" :show-overflow-tooltip="true"/>
                            <el-table-column prop="request" label="请求" :show-overflow-tooltip="true"/>
                            <el-table-column prop="requestTime" label="请求时间" width="160"/>
                        </el-table>
                    </div>
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
            videoStatisticsCardImgSrc: require('@assets/spider/dashboard/video.png'),
            danmuStatisticsCardImgSrc: require('@/assets/spider/dashboard/danmu.png'),
            userStatisticsCardImgSrc: require('@/assets/spider/dashboard/user.png'),
            commentStatisticsCardImgSrc: require('@/assets/spider/dashboard/comment.png'),
            spiderStatisticsCardImgSrc: require('@/assets/spider/dashboard/spider.png'),
            labelStatisticsCardImgSrc: require('@/assets/spider/dashboard/label.png'),
            tickStatisticsCardImgSrc: require('@/assets/spider/dashboard/tick.png'),
            crossStatisticsCardImgSrc: require('@/assets/spider/dashboard/cross.png'),

            tableData: [
                {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                }, {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                }, {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                }, {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                }, {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                }, {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                }, {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                }, {
                    crawlId: '1',
                    message: '上海市普陀区金沙江路 1518 弄',
                    targetUrl: 'http://www.bilibili.com',
                    request: `
                    {
                        "id": 78345,
                        "name": "Example User",
                        "email": "example.user@example.com",
                        "age": 28,
                        "tags": ["developer", "front-end", "vuejs"],
                        "isActive": true
                    }`,
                    requestTime: '2024-02-21 15:56:32',
                },
            ],

            crawlFailNum: 64,
        }
    },
    mounted() {
        this.initUserVideoAnalyseCharts()
        this.initCrawlSuccessFailCharts()
    },
    methods: {
        initUserVideoAnalyseCharts() {
            var leftChart = this.$echarts.init(document.getElementById('left-chart'))
            var option = {
                title: {
                    text: '分析用户',
                    left: 'center',
                    textStyle: {
                        color: '#92A0B1',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                },
                series: [
                    {
                        data: [
                            { value: 120, itemStyle: { color: '#3EAAD1' } },
                            { value: 200, itemStyle: { color: '#3EAAD1' } },
                            { value: 150, itemStyle: { color: '#3EAAD1' } },
                            { value: 80, itemStyle: { color: '#3EAAD1' } },
                            { value: 70, itemStyle: { color: '#3EAAD1' } },
                            { value: 110, itemStyle: { color: '#3EAAD1' } },
                            { value: 130, itemStyle: { color: '#3EAAD1' } },
                        ],
                        type: 'bar',
                        barWidth: '50%',
                    }
                ]
            };
            window.onresize = leftChart.resize;
            leftChart.setOption(option);

            var rightChart = this.$echarts.init(document.getElementById('right-chart'))
            var option = {
                title: {
                    text: '分析视频',
                    left: 'center',
                    textStyle: {
                        color: '#92A0B1',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                },
                series: [
                    {
                        data: [
                            { value: 120, itemStyle: { color: '#3EAAD1' } },
                            { value: 200, itemStyle: { color: '#3EAAD1' } },
                            { value: 150, itemStyle: { color: '#3EAAD1' } },
                            { value: 80, itemStyle: { color: '#3EAAD1' } },
                            { value: 70, itemStyle: { color: '#3EAAD1' } },
                            { value: 110, itemStyle: { color: '#3EAAD1' } },
                            { value: 130, itemStyle: { color: '#3EAAD1' } },
                        ],
                        type: 'bar',
                        barWidth: '50%',
                    }
                ]
            };
            window.onresize = rightChart.resize;
            rightChart.setOption(option);
        },

        timeRangeClick() {
            this.$message({
                message: '柱状图切换时间范围',
                type: 'success'
            });
        },

        crawlDetailLogJump() {
            this.$message({
                message: '抓取成功失败日志详情',
                type: 'success'
            });
        },

        initCrawlSuccessFailCharts() {
            var leftPieChart = this.$echarts.init(document.getElementById('left-pie-chart'))
            var option = {
                title: {
                    text: '抓取成功失败率',
                    left: 'center',
                    textStyle: {
                        color: '#92A0B1',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '95%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },

                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            window.onresize = leftPieChart.resize;
            leftPieChart.setOption(option);

            var rightBarChart = this.$echarts.init(document.getElementById('right-bar-chart'))
            var option = {
                title: {
                    text: '抓取成功失败数量',
                    left: 'center',
                    textStyle: {
                        color: '#92A0B1',
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: [
                        '2024-12-01',
                        '2024-12-02',
                        '2024-12-03',
                        '2024-12-04',
                        '2024-12-05',
                        '2024-12-06',
                        '2024-12-07',
                        '2024-12-08',
                        '2024-12-09',
                        '2024-12-10',
                        '2024-12-11',
                        '2024-12-12',
                        '2024-12-13',
                        '2024-12-14',
                    ],
                    axisLabel: {
                        rotate: 75,
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                },
                series: [
                    {
                        data: [
                            { value: 120, itemStyle: { color: '#3EAAD1' } },
                            { value: 200, itemStyle: { color: '#3EAAD1' } },
                            { value: 150, itemStyle: { color: '#3EAAD1' } },
                            { value: 80, itemStyle: { color: '#3EAAD1' } },
                            { value: 70, itemStyle: { color: '#3EAAD1' } },
                            { value: 110, itemStyle: { color: '#3EAAD1' } },
                            { value: 130, itemStyle: { color: '#3EAAD1' } },
                            { value: 120, itemStyle: { color: '#3EAAD1' } },
                            { value: 200, itemStyle: { color: '#3EAAD1' } },
                            { value: 150, itemStyle: { color: '#3EAAD1' } },
                            { value: 80, itemStyle: { color: '#3EAAD1' } },
                            { value: 70, itemStyle: { color: '#3EAAD1' } },
                            { value: 110, itemStyle: { color: '#3EAAD1' } },
                            { value: 130, itemStyle: { color: '#3EAAD1' } },
                        ],
                        type: 'bar',
                        barWidth: '5%',
                    }
                ]
            };
            window.onresize = rightBarChart.resize;
            rightBarChart.setOption(option);
        },
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
    height: 500px;
    margin: 30px 0px 30px 0px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    .left-chart-block {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .left-chart-right-top-btns {
            width: 100%;
            height: 10%;

            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .right-chart-block {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        .right-chart-right-top-btns {
            width: 100%;
            height: 10%;

            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .user-video-analyse-chart-block-middle {
        border: 1px solid #797979;
        border-radius: 10px;

        width: 15%;
        height: 70%;
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

.crawl-success-fail-chart-table-block {
    width: 100%;
    height: 420px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 20px 0px;

    .crawl-success-fail-chart-block {
        background-color: #303641;
        width: 74%;
        height: 100%;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0px 10px 0px 10px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;

        .crawl-success-fail-chart-block-right-top-btns {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .crawl-success-fail-pie-bar-chart-block {
            width: 100%;
            height: 90%;

            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .crawl-success-fail-table-block {
        background-color: #303641;
        width: 25%;
        height: 100%;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0px 10px 0px 10px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;

        .crawl-success-fail-table-block-right-top-btns {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .crawl-success-fail-table {
            width: 100%;
            height: 90%;
        }
    }
}

#left-chart {
    width: 100%;
    height: 90%;
}

#right-chart {
    width: 100%;
    height: 90%;
}

#left-pie-chart {
    width: 20%;
    height: 100%;
}

#right-bar-chart {
    width: 80%;
    height: 95%;
}
</style>