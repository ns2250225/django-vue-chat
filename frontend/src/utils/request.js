import axios from 'axios'

const BASE_URI = 'http://localhost:9090'

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URI,
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
