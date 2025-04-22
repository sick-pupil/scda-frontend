<template>
    <div class="notification-log">
        <div class="search-block">
            <el-form class="search-input-block" size="mini" :inline="true">
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
            <div class="search-btn-block">
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
    
}
</script>

<style scoped>
.search-block {
    background-color: #303641;
    border-radius: 10px;
    margin: 0px 0px 20px 0px;
    padding: 5px 5px 5px 5px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.search-input-block {
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

.search-btn-block {
    width: 100%;
    text-align: right;
    margin-top: 10px;
}
</style>