// import request from './request'
import axios from 'axios'
// 拼猪的详细信息
export function getPigPartInfo (data) {
  return axios({
    url: '/xxx',
    method: 'post',
    data
  })
}

// 拼猪 点击左侧node，查询当前分类下的商品
export function getPartList (data) {
  return axios({
    url: '/xxx',
    method: 'get',
    params: data
  })
}

// 选猪列表
export function getPigList (data) {
  return axios({
    url: '/xxx',
    method: 'get',
    params: data
  })
}

// 订单列表
export function getOrderList (data) {
  return axios({
    url: '/xxx',
    method: 'get',
    params: data
  })
}

// test
// export function test () {
//   return axios({
//     url: '/sugrec',
//     method: 'get',
//     params: {
//       prod: 'pc_his',
//       from: 'pc_web',
//       json: '1',
//       sid: '1441_33076_33059_33099_33100_33115_33144_32845_22158',
//       hisdata: '',
//       _t: 1606398699372,
//       req: 2,
//       csor: 0
//     }
//   })
// }
