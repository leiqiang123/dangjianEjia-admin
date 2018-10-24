<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻列表页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card mtop40">
            <div slot="header" class="clearfix">
                <span>新闻列表</span>
            </div>
            <div>
                <template>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="title" label="标题" width="120"></el-table-column>
                        <el-table-column prop="author.nickname" label="作者" width="180"></el-table-column>
                        <el-table-column prop="img" label="新闻图片" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.img" alt="" class="table-item-img">
                            </template>
                        </el-table-column>
                        <el-table-column prop="type.title" label="新闻分类"></el-table-column>
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
                tableData:[]
            }
        },
        methods: {
            getData() {
                this.$axios.get('/news').then(res => {
                    console.log(res)
                    this.tableData = res.data
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped>

</style>