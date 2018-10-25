import axios from 'axios'
import router from '../router'
import {Message} from 'element-ui'

const baseURL = process.env.BASE_API

const instance = axios.create({
    baseURL,
    timeout:15000
})

const xhr = {
    get (url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params:data}, config).then(res => {
                if(res.data.code == 403){
                    Message.info('登录过期，请重新登录')
                    router.push('/')
                }else{
                    resolve(res.data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetch (url, data, config, methods){
        return new Promise((resolve, reject) => {
            instance[methods](url, data, config).then(res => {
                if(res.data.code == 403){
                    Message.info('登录过期，请重新登录')
                    router.push('/')
                }else{
                    resolve(res.data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    post (url, data, config) {
        return this.fetch(url, data, config, 'post')
    },
    patch (url, data, config) {
        return this.fetch(url, data, config, 'patch')
    }
}

export default xhr