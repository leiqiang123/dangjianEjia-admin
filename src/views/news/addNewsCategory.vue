<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加新闻分类</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card mtop40">
            <div slot="header" class="clearfix">
                <span>添加新闻分类</span>
            </div>
            <div>
                <el-form :model="newsCategoryData" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item :required="true" label="分类标题:">
                        <el-input v-model="newsCategoryData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="分类图标:" required>
                        <upLoad v-model="newsCategoryData.imgUrl"></upLoad>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleAdd">立即添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    import upLoad from '../../components/upload'
    export default {
        components:{
            upLoad
        },
        data() {
            return {
                newsCategoryData:{}
            }
        },
        methods: {
            handleAdd() {
                this.$axios.post('/category',this.newsCategoryData).then(res => {
                    if(res.code == 200){
                        this.$message.success('添加分类成功')
                        this.$router.push('/layout/news')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>