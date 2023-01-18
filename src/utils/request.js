import axios from 'axios'

const request = axios.create({
  
})


request.interceptors.response.use(
    response => {
        let res = response.data;//axios自己封装的
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            //如果是string类型就转成json
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default request

