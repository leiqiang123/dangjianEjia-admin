<template>
    <div style="background: #080f16; height: 100vh;">
        <div class="login-wrap">
            <div class="login-middle">
                <div class="login-title">
                    <h1>党建项目后台管理系统</h1>
                </div>
                <el-form class="login-form" ref="form" label-width="80px">
                    <el-form-item class="form-item">
                        <span class="form-span">身份证号：</span>
                        <el-input v-model="userInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item class="form-item">
                        <span class="form-span">密码：</span>
                        <el-input type="password" v-model="userInfo.password"></el-input>
                    </el-form-item>
                    <el-button class="login-btn" type="primary" size="medium" @click="handleLogin">登录</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                userInfo:{
                    username:'xiaoqiang',
                    password:'123456'
                }
            }
        },
        methods: {
            handleLogin () {
                this.$axios.post('/login',this.userInfo).then(res => {
                    // console.log(res)
                    if(res.code == 200){
                        this.$message.success('登录成功')
                        this.$store.commit('CHANGE_USERINFO',res.userData)
                        this.$router.push('/layout')
                    }else{
                        this.$message.error('登录失败')
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.login-wrap{
    width: 100%;
    padding: 120px 0;
    .login-middle{
        width: 400px;
        padding: 10px;
        margin: 0 auto;
        border: 1px solid #fff;
        border-radius: 5px;
        .login-title{
            color: #fff;
            margin-bottom: 40px;
            text-align: center;
        }
        .login-form{
            .form-item{
                margin-left: -65px;
                margin-right: 12px;
                margin-top: -10px;
                .form-span{
                    color: #fff;
                }
            }
            .login-btn{
                width: 351px;
                margin: 20px 0 20px 16px;
            }
        }
    }
}
</style>