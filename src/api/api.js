import request from './request'
// import axios from 'axios'
// 拼猪的详细信息
export function getPigPartInfo (data) {
  return request({
    url: 'rule/getRuleListByType',
    method: 'post',
    data
  })
}

// 拼猪 点击左侧node，查询当前分类下的商品
export function getPartList (data) {
  return request({
    url: 'xxx',
    method: 'get',
    params: data
  })
}

// 选猪列表
export function getPigList (data) {
  return request({
    url: 'xxx',
    method: 'get',
    params: data
  })
}

// 订单列表
export function getOrderList (data) {
  return request({
    url: 'xxx',
    method: 'get',
    params: data
  })
}
