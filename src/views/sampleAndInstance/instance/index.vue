<template>
    <div class="instance">
        <div class="instance-block">
            <el-form class="instance-input-block" size="mini" :inline="true">
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
                <el-form-item label="最小步骤数">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大步骤数">
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
                <el-form-item label="最小请求次数">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大请求次数">
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
            <div class="instance-btn-block">
                <el-button type="primary" size="mini">搜索</el-button>
                <el-button type="primary" size="mini">启动</el-button>
                <el-button type="primary" size="mini">停止</el-button>
                <el-button type="primary" size="mini">失效</el-button>
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
                <el-table-column prop="instanceLog" label="实例日志" />
                <el-table-column prop="stepNum" label="步骤数" />
                <el-table-column prop="startTime" label="启动时间" />
                <el-table-column prop="executionTime" label="执行时间" />
                <el-table-column prop="endTime" label="结束时间" />
                <el-table-column prop="successPercent" label="成功率" />
                <el-table-column prop="failPercent" label="失败率" />
                <el-table-column prop="requestTime" label="请求次数" />
                <el-table-column prop="consumingTime" label="耗时" />
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column prop="updateTime" label="更新时间" />
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">启动</el-button>
                        <el-button type="text" size="small">停止</el-button>
                        <el-button type="text" size="small">失效</el-button>
                    </template>
                </el-table-column>
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
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    belongSample: '2016-05-02',
                    sampleStatus: '王小虎',
                    instanceType: 1,
                    instanceStatus: 1,
                    instanceBatchNo: 1,
                    instanceLog: 1,
                    stepNum: 1,
                    successPercent: 96,
                    failPercent: 4,
                    requestTime: 3,
                    consumingTime: 120,
                    startTime: "2016-05-02 15:32:22",
                    executionTime: "2016-05-02 15:32:22",
                    endTime: "2016-05-02 15:32:22",
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, 
            ]
        }
    }
}
</script>

<style scoped>
.instance-block {
    background-color: #303641;
    border-radius: 10px;
    margin: 0px 0px 20px 0px;
    padding: 5px 5px 5px 5px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.instance-input-block {
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

.instance-btn-block {
    width: 100%;
    text-align: right;
    margin-top: 10px;
}
</style>