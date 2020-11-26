import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 30000000
})

// service.interceptors.request.use(
//   config => {
//     console.log(store.getters.token)
//     if (store.getters.token) {
//       config.headers['X-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

// 响应拦截器
// service.interceptors.response.use(
//   response => {
//     const res = response
//     if (res.data.rtnCode === 300) {
//       Message({
//         message: res.data.data.msg || '登陆错误',
//         type: 'error',
//         duration: 5 * 1000
//       })
//       // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//       //   // to re-login
//       //   MessageBox.confirm('Token已失效，请重新登陆', '确认登出', {
//       //     confirmButtonText: '登陆',
//       //     cancelButtonText: '取消',
//       //     type: 'warning'
//       //   }).then(() => {
//       //     store.dispatch('user/resetToken').then(() => {
//       //       location.reload()
//       //     })
//       //   })
//       // }
//       return Promise.reject(new Error(res.msg || 'Error'))
//     } else if (res.data.rtnCode === 301) {
//       Message({
//         message: '没有操作权限，请联系管理员',
//         type: 'warning',
//         duration: 5 * 1000
//       })
//     } else if (res.data.rtnCode === 303) {
//       MessageBox.confirm('您的账户在另一台设备登陆，如果不是本人操作，请及时修改密码', {
//         confirmButtonText: '登陆',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         store.dispatch('user/resetToken').then(() => {
//           location.reload()
//         })
//       })
//     } else if (res.data.rtnCode === 302) {
//       MessageBox.confirm('登陆超时，请重新登陆', '确认登出', {
//         confirmButtonText: '登陆',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         store.dispatch('user/resetToken').then(() => {
//           location.reload()
//         })
//       })
//     } else if (res.data.rtnCode === 500) {
//       Message({
//         message: res.data.msg,
//         type: 'error',
//         duration: 5 * 1000
//       })
//     } else if (res.data.rtnCode === 200) {
//       return res
//     } else {
//       return res
//     }
//   },
//   error => {
//     console.log('err' + error) // for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service
