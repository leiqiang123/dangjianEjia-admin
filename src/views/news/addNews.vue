<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>添加新闻</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card mtop40">
            <div slot="header" class="clearfix">
                <span>添加新闻</span>
            </div>
            <div class="add-content">
                <el-form :model="newsData" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="标题:" required>
                        <el-input v-model="newsData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="作者:" required>
                        <el-select v-model="newsData.author" placeholder="请选择作者">
                            <el-option
                                v-for="(item, index) in userData"
                                :key="index"
                                :label="item.nickname"
                                :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="新闻图片:" required>
                        <upLoad v-model="newsData.img"></upLoad>
                    </el-form-item>
                    <el-form-item label="新闻内容">
                        <quill-editor
                            v-model="newsData.content"
                            ref="myQuillEditor"
                            :options="editorOption"
                            @change="editChange">
                        </quill-editor>
                    </el-form-item>
                    <el-form-item label="分类:" required>
                        <el-select v-model="newsData.type" placeholder="请选择分类">
                            <el-option
                                v-for="(item, index) in categoryData"
                                :key="index"
                                :label="item.title"
                                :value="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">立即添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    import axios from 'axios'

    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)

    import upLoad from '../../components/upload'
    export default {
        components: {
            upLoad,
            quillEditor
        },
        data () {
            return {
                newsData:{},
                categoryData:[],
                userData:[],
                token:'',
                editorOption:{
                    modules: {
                        ImageExtend: {
                            loading: true,
                            name: 'file',
                            action: 'https://upload-z1.qiniup.com',
                            response: (res) => {
                                return res.url
                            },
                            change: (xhr, formData) => {
                            // xhr.setRequestHeader('myHeader','myValue')
                            formData.append('token', this.token)
                            }
                        },
                        toolbar: {
                            container: container,
                            handlers: {
                                'image': function () {
                                    QuillWatch.emit(this.quill.id)
                                }
                            }
                        }
                    }
                }
            }
        },
        methods: {
            //获取新闻分类
            getCategoryData() {
                this.$axios.get('/category').then(res => {
                    this.categoryData = res.data
                })
            },
            //获取新闻作者
            getUserData() {
                this.$axios.get('/user').then(res => {
                    this.userData = res.data
                })
            },
            //获取图片token
            getToken() {
                axios.get('http://upload.yaojunrong.com/getToken').then(res => {
                    this.token = res.data.data
                })
            },
            editChange({quil, html, text}) {
                // console.log(html,2)  
                // console.log(text,3)
            }  
        },
        created() {
            // this.getCategoryData()
            // this.getUserData()
            this.getToken()
        }
    }
</script>

<style scoped lang="less">
.add-content{
    // width: 500px;
}
</style>