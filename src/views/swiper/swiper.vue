<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>轮播图列表页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card mtop40">
            <div slot="header" class="clearfix">
                <span>轮播图列表</span>
            </div>
            <div>
                <template>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="title" label="轮播图标题" width="200"></el-table-column>
                        <el-table-column prop="imgUrl" label="轮播图片" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.imgUrl" class="table-item-img">
                            </template>
                        </el-table-column>
                        <el-table-column prop="newsId.title" label="新闻标题" width="220"></el-table-column>
                        <el-table-column prop="status" label="是否显示" width="100"></el-table-column>
                        <el-table-column prop="sort" label="排序" width="100"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="primary" size="small" @click="detailJump(scope.row._id)">查看详细</el-button>
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
                this.$axios.get('/swiper').then(res => {
                    this.tableData = res.data
                })
            },
            detailJump(id) {
                // console.log(id)
                this.$router.push({
                    path:'/layout/addSwiper',
                    query:{id}
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