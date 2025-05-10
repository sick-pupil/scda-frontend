<template>
    <div class="sample">
        <div class="search-block">
            <el-form class="search-input-block" size="mini" :inline="true">
                <el-form-item label="名称">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小定时实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大定时实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小线程池内实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大线程池内实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小HTTP实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大HTTP实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最小MQ实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="最大MQ实例数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="状态">
                    <el-select>
                        <el-option label="有效"></el-option>
                        <el-option label="无效"></el-option>
                    </el-select>
                </el-form-item>
                <br />
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
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="primary" size="mini">新增</el-button>
                <el-button type="primary" size="mini">失效</el-button>
            </div>
        </div>
        <div class="table-block">
            <el-table :data="tableData" height="auto">
                <el-table-column type="selection" />
                <el-table-column fixed="left" type="index" />
                <el-table-column prop="name" label="名称" />
                <el-table-column prop="desc" label="描述" />
                <el-table-column prop="instanceNum" label="实例数量" />
                <el-table-column prop="scheduledInstanceNum" label="定时实例数量" />
                <el-table-column prop="threadPoolInstanceNum" label="线程池内实例数量" />
                <el-table-column prop="httpInstanceNum" label="HTTP实例数量" />
                <el-table-column prop="mqInstanceNum" label="MQ实例数量" />
                <el-table-column prop="initLogic" label="初始化逻辑">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">浏览</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="runLogic" label="运行逻辑">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">浏览</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="destoryLogic" label="销毁逻辑">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">浏览</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column prop="updateTime" label="更新时间" />
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">失效</el-button>
                        <el-button type="text" size="small">编辑</el-button>
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
                    name: '2016-05-02',
                    desc: '王小虎',
                    instanceNum: 1,
                    scheduledInstanceNum: 1,
                    threadPoolInstanceNum: 1,
                    httpInstanceNum: 1,
                    mqInstanceNum: 1,
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    name: '2016-05-02',
                    desc: '王小虎',
                    instanceNum: 1,
                    scheduledInstanceNum: 1,
                    threadPoolInstanceNum: 1,
                    httpInstanceNum: 1,
                    mqInstanceNum: 1,
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    name: '2016-05-02',
                    desc: '王小虎',
                    instanceNum: 1,
                    scheduledInstanceNum: 1,
                    threadPoolInstanceNum: 1,
                    httpInstanceNum: 1,
                    mqInstanceNum: 1,
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    name: '2016-05-02',
                    desc: '王小虎',
                    instanceNum: 1,
                    scheduledInstanceNum: 1,
                    threadPoolInstanceNum: 1,
                    httpInstanceNum: 1,
                    mqInstanceNum: 1,
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, {
                    name: '2016-05-02',
                    desc: '王小虎',
                    instanceNum: 1,
                    scheduledInstanceNum: 1,
                    threadPoolInstanceNum: 1,
                    httpInstanceNum: 1,
                    mqInstanceNum: 1,
                    createTime: '2016-05-02 15:32:22',
                    updateTime: '2016-05-02 15:32:22',
                }, 
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
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