<template>
    <div class="ip-agent">
        <div class="search-block">
            <el-form class="search-input-block" size="mini" :inline="true">
                <el-form-item label="获取代理IP的请求地址">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="产生的代理IP最小数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="产生的代理IP最大数量">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="获取代理结果">
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
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="primary" size="mini">生效</el-button>
                <el-button type="primary" size="mini">失效</el-button>
            </div>
        </div>
        <div class="table-block">
            <el-table :data="tableData" height="auto">
                <el-table-column type="selection" />
                <el-table-column fixed="left" type="index" />
                <el-table-column prop="getAgentIpSourceUrl" label="获取代理IP的请求地址" />
                <el-table-column prop="agentIpsNum" label="产生的代理IP数量" />
                <el-table-column prop="username" label="用户名" />
                <el-table-column prop="password" label="密码" />
                <el-table-column prop="agentResult" label="获取代理结果" />
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column prop="updateTime" label="更新时间" />
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">生效</el-button>
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
                    getAgentIpSourceUrl: 'https://dps.kdlapi.com/api/getdps/?secret_id=o1fjh1re9o28876h7c08&signature=xxxxx&num=1&pt=1&sep=1',
                    agentIpsNum: 23,
                    username: 'lhy',
                    password: '1234',
                    accessTargetUrl: 'https://api.bilibili.com/x/kv-frontend/namespace/data',
                    agentResult: '正常',
                    createTime: '2025-01-29 19:19:19',
                    updateTime: '2025-01-29 19:19:19',
                },{
                    getAgentIpSourceUrl: 'https://dps.kdlapi.com/api/getdps/?secret_id=o1fjh1re9o28876h7c08&signature=xxxxx&num=1&pt=1&sep=1',
                    agentIpsNum: 12,
                    username: 'lhy',
                    password: '1234',
                    accessTargetUrl: 'https://api.bilibili.com/x/kv-frontend/namespace/data',
                    agentResult: '正常',
                    createTime: '2025-01-29 19:19:19',
                    updateTime: '2025-01-29 19:19:19',
                }, {
                    getAgentIpSourceUrl: 'https://dps.kdlapi.com/api/getdps/?secret_id=o1fjh1re9o28876h7c08&signature=xxxxx&num=1&pt=1&sep=1',
                    agentIpsNum: 32,
                    username: 'lhy',
                    password: '1234',
                    accessTargetUrl: 'https://api.bilibili.com/x/kv-frontend/namespace/data',
                    agentResult: '正常',
                    createTime: '2025-01-29 19:19:19',
                    updateTime: '2025-01-29 19:19:19',
                }, {
                    getAgentIpSourceUrl: 'https://dps.kdlapi.com/api/getdps/?secret_id=o1fjh1re9o28876h7c08&signature=xxxxx&num=1&pt=1&sep=1',
                    agentIpsNum: 2,
                    username: 'lhy',
                    password: '1234',
                    accessTargetUrl: 'https://api.bilibili.com/x/kv-frontend/namespace/data',
                    agentResult: '正常',
                    createTime: '2025-01-29 19:19:19',
                    updateTime: '2025-01-29 19:19:19',
                }, {
                    getAgentIpSourceUrl: 'https://dps.kdlapi.com/api/getdps/?secret_id=o1fjh1re9o28876h7c08&signature=xxxxx&num=1&pt=1&sep=1',
                    agentIpsNum: 5,
                    username: 'lhy',
                    password: '1234',
                    accessTargetUrl: 'https://api.bilibili.com/x/kv-frontend/namespace/data',
                    agentResult: '正常',
                    createTime: '2025-01-29 19:19:19',
                    updateTime: '2025-01-29 19:19:19',
                }, 
            ]
        }
    }
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