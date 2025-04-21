<template>
    <div class="step">
        <div class="step-block">
            <el-form class="step-input-block" size="mini" :inline="true">
                <el-form-item label="所属样本">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="样本状态">
                    <el-select>
                        <el-option label="有效"></el-option>
                        <el-option label="无效"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="实例类型">
                    <el-select>
                        <el-option label="定时实例"></el-option>
                        <el-option label="线程池内实例"></el-option>
                        <el-option label="HTTP实例"></el-option>
                        <el-option label="MQ实例"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="实例状态">
                    <el-select>
                        <el-option label="初始化"></el-option>
                        <el-option label="运行"></el-option>
                        <el-option label="销毁"></el-option>
                        <el-option label="失败"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="最小实例批次号">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大实例批次号">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="步骤目标URL">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="步骤结果">
                    <el-select>
                        <el-option label="正常"></el-option>
                        <el-option label="异常"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="最小重试次数">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大重试次数">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小成功率">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大成功率">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小失败率">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大失败率">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小抓取速率">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大抓取速率">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小抓取延迟">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大抓取延迟">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小耗时">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大耗时">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="启动时间">
                    <el-date-picker type="datetimerange" range-separator="至" start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="执行时间">
                    <el-date-picker type="datetimerange" range-separator="至" start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-date-picker type="datetimerange" range-separator="至" start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-date-picker type="datetimerange" range-separator="至" start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="更新时间">
                    <el-date-picker type="datetimerange" range-separator="至" start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div class="step-btn-block">
                <el-button type="primary" size="mini">搜索</el-button>
            </div>
        </div>
        <div class="table-block">
            <el-table :data="tableData" height="auto">
                <el-table-column type="selection" />
                <el-table-column fixed="left" type="index" />
                <el-table-column prop="belongSample" label="所属样本" />
                <el-table-column prop="sampleStatus" label="样本状态" />
                <el-table-column prop="instanceType" label="实例类型" />
                <el-table-column prop="instanceStatus" label="实例状态" />
                <el-table-column prop="instanceBatchNo" label="实例批次号" />
                <el-table-column prop="targetUrl" label="步骤目标URL" />
                <el-table-column prop="stepResult" label="步骤结果" />
                <el-table-column prop="retryTime" label="重试次数" />
                <el-table-column prop="successPercent" label="成功率" />
                <el-table-column prop="failPercent" label="失败率" />
                <el-table-column prop="crawlSpeed" label="抓取速率" />
                <el-table-column prop="crawlDelay" label="抓取延迟" />
                <el-table-column prop="consumingTime" label="耗时" />
                <el-table-column prop="startTime" label="启动时间" />
                <el-table-column prop="executionTime" label="执行时间" />
                <el-table-column prop="endTime" label="结束时间" />
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column prop="updateTime" label="更新时间" />
            </el-table>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                layout="total, sizes, prev, pager, next, jumper" :total="400" style="float: right; margin-top: 5px;">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    targetUrl: 'http://www.bilibili.com',
                    stepResult: '异常',
                    retryTime: 1,
                    successPercent: 99,
                    failPercent: 1,
                    crawlSpeed: 1,
                    crawlDelay: 1,
                    consumingTime: 120,
                    startTime: '2016-05-02 15:32:22',
                    executionTime: '2016-05-02 15:32:22',
                    endTime: '2016-05-02 15:32:22',
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    targetUrl: 'http://www.bilibili.com',
                    stepResult: '异常',
                    retryTime: 1,
                    successPercent: 99,
                    failPercent: 1,
                    crawlSpeed: 1,
                    crawlDelay: 1,
                    consumingTime: 120,
                    startTime: '2016-05-02 15:32:22',
                    executionTime: '2016-05-02 15:32:22',
                    endTime: '2016-05-02 15:32:22',
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    targetUrl: 'http://www.bilibili.com',
                    stepResult: '异常',
                    retryTime: 1,
                    successPercent: 99,
                    failPercent: 1,
                    crawlSpeed: 1,
                    crawlDelay: 1,
                    consumingTime: 120,
                    startTime: '2016-05-02 15:32:22',
                    executionTime: '2016-05-02 15:32:22',
                    endTime: '2016-05-02 15:32:22',
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    targetUrl: 'http://www.bilibili.com',
                    stepResult: '异常',
                    retryTime: 1,
                    successPercent: 99,
                    failPercent: 1,
                    crawlSpeed: 1,
                    crawlDelay: 1,
                    consumingTime: 120,
                    startTime: '2016-05-02 15:32:22',
                    executionTime: '2016-05-02 15:32:22',
                    endTime: '2016-05-02 15:32:22',
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    targetUrl: 'http://www.bilibili.com',
                    stepResult: '异常',
                    retryTime: 1,
                    successPercent: 99,
                    failPercent: 1,
                    crawlSpeed: 1,
                    crawlDelay: 1,
                    consumingTime: 120,
                    startTime: '2016-05-02 15:32:22',
                    executionTime: '2016-05-02 15:32:22',
                    endTime: '2016-05-02 15:32:22',
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    targetUrl: 'http://www.bilibili.com',
                    stepResult: '异常',
                    retryTime: 1,
                    successPercent: 99,
                    failPercent: 1,
                    crawlSpeed: 1,
                    crawlDelay: 1,
                    consumingTime: 120,
                    startTime: '2016-05-02 15:32:22',
                    executionTime: '2016-05-02 15:32:22',
                    endTime: '2016-05-02 15:32:22',
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, 
            ]
        }
    }
}
</script>

<style scoped>
.step-block {
    background-color: #303641;
    border-radius: 10px;
    margin: 0px 0px 20px 0px;
    padding: 5px 5px 5px 5px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.step-input-block {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    .range-middle-link-text {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.step-btn-block {
    width: 100%;
    text-align: right;
    margin-top: 10px;
}
</style>