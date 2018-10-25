<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>管理员列表页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card mtop40">
            <div slot="header" class="clearfix">
                <span>管理员列表</span>
            </div>
            <div>
                <template>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="nickname" label="姓名" width="120"></el-table-column>
                        <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
                        <el-table-column prop="avatar" label="头像" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.avatar" alt="" class="table-item-img">
                            </template>
                        </el-table-column>
                        <el-table-column prop="sex" label="性别" width="60"></el-table-column>
                        <el-table-column prop="job" label="职业" width="60"></el-table-column>
                        <el-table-column prop="desc" label="个性签名"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="small">查看详细</el-button>
                                <el-button type="danger" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            getUserData() {
                this.$axios.get('/user').then(res => {
                    // console.log(res.data)
                    this.tableData = res.data
                })
            }
        },
        created() {
            this.getUserData()
        }
    }
</script>

<style scoped>
</style>