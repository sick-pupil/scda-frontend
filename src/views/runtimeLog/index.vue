<template>
    <div class="run-time-log">
        <div class="run-time-log-block">
            <el-form class="run-time-log-input-block" size="mini" :inline="true">
                <el-form-item label="类型">
                    <el-select>
                        <el-option label="步骤"></el-option>
                        <el-option label="实例"></el-option>
                        <el-option label="IP池"></el-option>
                        <el-option label="UA池"></el-option>
                        <el-option label="SQL"></el-option>
                        <el-option label="Redis"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="主机">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-date-picker type="datetimerange" range-separator="至" start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div class="run-time-log-btn-block">
                <el-button type="primary" size="mini">搜索</el-button>
            </div>
        </div>
        <div class="table-block">
            <el-table :data="tableData" height="auto">
                <el-table-column type="selection" />
                <el-table-column fixed="left" type="index" />
                <el-table-column prop="type" label="类型" />
                <el-table-column prop="content" label="内容" />
                <el-table-column prop="host" label="主机" />
                <el-table-column prop="createTime" label="创建时间" />
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
                    type: 'SQL',
                    content: '王小虎',
                    host: '192.168.12.8',
                    createTime: '2016-05-02 15:32:22',
                }, {
                    type: 'SQL',
                    content: '王小虎',
                    host: '192.168.12.8',
                    createTime: '2016-05-02 15:32:22',
                }, {
                    type: 'SQL',
                    content: '王小虎',
                    host: '192.168.12.8',
                    createTime: '2016-05-02 15:32:22',
                }, {
                    type: 'SQL',
                    content: '王小虎',
                    host: '192.168.12.8',
                    createTime: '2016-05-02 15:32:22',
                }, {
                    type: 'SQL',
                    content: '王小虎',
                    host: '192.168.12.8',
                    createTime: '2016-05-02 15:32:22',
                }, {
                    type: 'SQL',
                    content: '王小虎',
                    host: '192.168.12.8',
                    createTime: '2016-05-02 15:32:22',
                }, 
            ]
        }
    }
}
</script>

<style scoped>
.run-time-log-block {
    background-color: #303641;
    border-radius: 10px;
    margin: 0px 0px 20px 0px;
    padding: 5px 5px 5px 5px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.run-time-log-input-block {
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

.run-time-log-btn-block {
    width: 100%;
    text-align: right;
    margin-top: 10px;
}
</style>