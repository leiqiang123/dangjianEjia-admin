<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加轮播图</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card class="box-card mtop40">
            <div slot="header" class="clearfix">
                <span>添加轮播图</span>
            </div>
            <div>
                <el-form :model="swiperData" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item :required="true" label="轮播图标题:">
                        <el-input v-model="swiperData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="排序:" required>
                        <template>
                            <el-input-number
                                v-model="swiperData.sort"
                                :min="1"
                                :max="1000"
                                label="排序">
                            </el-input-number>
                        </template>
                    </el-form-item>
                    <el-form-item label="轮播图片:" required>
                        <upLoad v-model="swiperData.imgUrl"></upLoad>
                    </el-form-item>
                    <el-form-item label="是否显示:" required>
                        <el-switch
                            v-model="swiperData.status"
                            active-text="显示"
                            inactive-text="不显示"
                            active-value="1"
                            inactive-value="0">
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="分类:" required>
                        <el-select v-model="swiperData.newsId" placeholder="请选择分类">
                            <el-option
                                v-for="(item, index) in newsData"
                                :key="index"
                                :label="item.title"
                                :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleAdd" v-if="isShow">立即添加</el-button>
                        <el-button type="primary" @click="handleEdit" v-else>立即修改</el-button>
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
                swiperData:{},
                newsData:[],
                isShow:true
            }
        },
        methods: {
            handleAdd() {
                // console.log(this.swiperData)
                this.$axios.post('/swiper', this.swiperData).then(res => {
                    if(res.code == 200){
                        this.$message.success('添加轮播图成功')
                        this.$router.push('/layout/swiper')
                    }
                })
            },
            getNewsData() {
                this.$axios.get('/news').then(res => {
                    this.newsData = res.data
                })
            },
            getData() {
                this.$axios.get(`/swiper/${this.$route.query.id}`).then(res => {
                    // console.log(res)
                    this.swiperData = res.data
                })
            },
            handleEdit() {
                this.$axios.patch(`/swiper/${this.$route.query.id}`,this.swiperData).then(res => {
                    if(res.code = 200){
                        this.$message.success(res.msg)
                        this.$router.push('/layout/swiper')
                    }
                })
            }
        },
        created() {
            if(this.$route.query.id){
                this.isShow = false
                this.getData()
            }
            this.getNewsData()
        },
        watch: {
            $route(to, from){
                if(to.query.id){
                }else{
                    this.swiperData = {}
                    this.isShow = true
                    this.getNewsData()
                }
            }
        }
    }
</script>

<style scoped>

</style>