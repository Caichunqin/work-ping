<template>
  <div class="p-pig-list-wrap">
    <van-nav-bar
      left-arrow
      title="选猪列表"
      left-text="返回"
      @click-left="back">
    </van-nav-bar>
    <div class="c-page-wrap">
      <div class="c-fs-24 c-mb-20 pig-info-wrap" v-for="(item, index) in dataList" :key="index">
        <div class="c-d-f c-ai-c c-p-20 c-fs-22 pig-info-top">
          <img :src="item.img" class="info-img">
          <div class="c-ml-30 text-wrap">
            <span class="c-fs-28 c-c-text-red c-fw-b">{{item.title}}</span>
            <div class="c-d-f c-jc-sb c-ai-c">
              <span>预计屠宰时间：{{item.killTime}}</span>
              <van-icon name="arrow-down" />
            </div>
            <div class="c-d-f c-ai-c">
              <span>竞拍截止时间：</span>
              <van-count-down :time="item.deadline">
                <template #default="timeData">
                  <span class="block">{{ timeData.hours }}:{{ timeData.minutes }}:{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
          </div>
        </div>
        <!-- <div class="c-p-20 pig-info-detail"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { back } from '../shared/util'
export default {
  data () {
    return {
      dataList: [
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          killTime: '2020-11-20',
          deadline: 13000, // 毫秒
          detailInfo: {
            name: '厂名：海南罗牛山公司',
            address: '厂址：海南省海口市**区**路**号',
            phone: '联系电话：231231231231',
            expirationDate: '保质期：2个月',
            type: '猪肉种类：白猪肉',
            origin: '产地：中国大陆',
            province: '省份：海南省'
          }
        },
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          killTime: '2020-11-20',
          deadline: 23000, // 毫秒
          detailInfo: {
            name: '厂名：海南罗牛山公司',
            address: '厂址：海南省海口市**区**路**号',
            phone: '联系电话：231231231231',
            expirationDate: '保质期：2个月',
            type: '猪肉种类：白猪肉',
            origin: '产地：中国大陆',
            province: '省份：海南省'
          }
        },
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          killTime: '2020-11-20',
          deadline: 233000, // 毫秒
          detailInfo: {
            name: '厂名：海南罗牛山公司',
            address: '厂址：海南省海口市**区**路**号',
            phone: '联系电话：231231231231',
            expirationDate: '保质期：2个月',
            type: '猪肉种类：白猪肉',
            origin: '产地：中国大陆',
            province: '省份：海南省'
          }
        }
      ]
    }
  },
  methods: {
    back
  }
}
</script>

<style lang="scss">
.p-pig-list-wrap {
  .pig-info-wrap {
    text-align: left;
    .pig-info-top {
      width: 100%;
      height: 200px;
      background-color: #fff;
      border-radius: 10px;/*no*/
      .text-wrap {
        width: calc(100% - 230px);
        height: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .info-img {
        width: 200px;
        height: 160px;
        object-fit: cover;
        border-radius: 10px;/*no*/
      }
      .block {
        height: 36px;
        padding: 0 10px;/*no*/
        font-size: 22px;
        color: #fff;
        border-radius: 6px;
        background-color: #B22E2A;
      }
    }
  }
}
</style>
