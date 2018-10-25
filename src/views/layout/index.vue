<template>
    <div class="layout">
        <div class="header ml-200">
            <h1 class="title">党建项目后台操作系统</h1>
            <el-dropdown class="header-r" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="header-img" :src="this.$store.state.userInfo.avatar">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="1">修改个人信息</el-dropdown-item>
                    <el-dropdown-item command="2">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="left-bar">
            <el-menu class="el-menu" background-color="#545c64" text-color="#fff" :router="true">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">用户管理</template>
                        <el-menu-item index="/layout/index">首页</el-menu-item>
                        <el-menu-item index="/">登录页</el-menu-item>
                        <el-menu-item index="/layout/user">管理员列表页</el-menu-item>
                        <el-menu-item index="/layout/addUser">添加管理员</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>新闻管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">新闻管理</template>
                        <el-menu-item index="/layout/news">新闻列表页</el-menu-item>
                        <el-menu-item index="/layout/addNews">添加新闻</el-menu-item>
                        <el-menu-item index="/layout/addNewsCategory">添加新闻分类</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>轮播图管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">轮播图管理</template>
                        <el-menu-item index="/layout/swiper">轮播图列表页</el-menu-item>
                        <el-menu-item index="/layout/addSwiper">添加轮播图</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div class="main-content ml-200">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleCommand () {
                console.log(1)
            }
        }
    }
</script>

<style scoped lang="less">
.layout{
    .title{
        text-align: center;
        font-weight: 400;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #f1f1f1;
        font-size: 20px;
    }
    .ml-200{
        margin-left: 200px;
        position: relative;
    }
    .left-bar{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 200px;
        padding-top: 60px;
        overflow: hidden;
        background: #545c64;
        .el-menu{
            border-right: none;
        }
    }
    .main-content{
        padding: 15px;
    }
    .header-r{
        position: absolute;
        top: 0;
        right: 30px;
    }
    .header-img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
}
</style>