<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="add-content mtop40">
            <el-form :model="userData" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item :required="true" label="用户名:" prop="username">
                    <el-input v-model="userData.username"></el-input>
                </el-form-item>
                <el-form-item label="昵称:" prop="nickname">
                    <el-input v-model="userData.nickname"></el-input>
                </el-form-item>
                <el-form-item :required="true" label="密码:" prop="password">
                    <el-input type="password" v-model="userData.password"></el-input>
                </el-form-item>
                <el-form-item label="电话号码:" prop="phone">
                    <el-input v-model="userData.phone"></el-input>
                </el-form-item>
                <el-form-item label="头像:" prop="avatar">
                    <upLoad v-model="userData.avatar"></upLoad>
                </el-form-item>
                <el-form-item label="性别:" prop="sex">
                    <el-select v-model="userData.sex" placeholder="请选择性别">
                        <el-option label="女" :value="0"></el-option>
                        <el-option label="男" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="职称:" prop="job">
                    <el-select v-model="userData.job" placeholder="请选择职业">
                        <el-option label="教师" :value="0"></el-option>
                        <el-option label="学生" :value="1"></el-option>
                        <el-option label="教授" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="个人描述:" prop="desc">
                    <el-input type="textarea" v-model="userData.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">立即添加</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import upLoad from '../../components/upload'
    export default {
        components: {
            upLoad
        },
        data () {
            return {
                userData:{}
            }
        },
        methods: {
            handleAdd() {
                this.$axios.post('/user', this.userData).then(res => {
                    // console.log(res)
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$router.push('/layout/user')
                    }else{
                        this.$message.error(res.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.add-content{
    width: 500px;
}
</style>