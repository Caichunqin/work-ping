<template>
  <div class="p-pig-list-wrap">
    <van-nav-bar
      left-arrow
      title="选猪列表"
      left-text="返回"
      @click-left="back">
    </van-nav-bar>
    <div class="c-page-wrap">
      <div class="c-fs-24 c-fw-4 c-mb-20 pig-info-wrap" v-for="(item, index) in dataList" :key="index">
        <div class="c-d-f c-ai-c c-p-20 c-fs-22 pig-info-top" :class="activeIndex === index ? 'border-bottom-none' : ''">
          <img :src="item.img" class="info-img">
          <div class="c-ml-40 c-c-text-grey text-wrap">
            <span class="c-fs-28 c-c-text-red c-fw-b">{{item.title}}</span>
            <div class="c-d-f c-jc-sb c-ai-c" @click="activeIndex = activeIndex === index ? '' : index">
              <span>预计屠宰时间：{{item.killTime}}</span>
              <van-icon :name="activeIndex === index ? 'arrow-up':'arrow-down'"/>
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
        <transition name="slide-fade">
          <div class="pig-info-detail" :class="activeIndex === index ? 'actived border-top-none': ''">
            <div class="c-d-f c-ai-c c-pl-20 c-pt-30 c-pb-20">
              <img src="../assets/info-card.png" class="c-mr-20 detail-img">
              <span class="c-fs-30 c-fw-b c-c-text-color-dark">溯源信息</span>
            </div>
            <ul class="c-fs-24">
              <li class="c-ptb-20 c-pl-20 border">厂名：{{item.detailInfo.name}}</li>
              <li class="c-ptb-20 c-pl-20 border">厂址：{{item.detailInfo.address}}</li>
              <li class="c-ptb-20 c-pl-20 border">联系电话：{{item.detailInfo.phone}}</li>
              <li class="c-ptb-20 c-pl-20 border">
                <span class="c-mr-30">保质期：{{item.detailInfo.expirationDate}}</span> | <span class="c-ml-30">猪肉种类：{{item.detailInfo.type}}</span>
              </li>
              <li class="c-pt-20 c-pb-30 c-pl-20">
                <span class="c-mr-30">产地：{{item.detailInfo.origin}}</span> | <span class="c-ml-30">省份：{{item.detailInfo.province}}</span>
              </li>
              <li class="c-fs-32 pin-btn" @click="toUrl('/pinPig', {pigId: item.id})">拼猪</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { back, toUrl } from '../shared/util'
import { getPigList } from '../api/api'
export default {
  data () {
    return {
      activeIndex: '',
      dataList: [
        {
          id: 1,
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          killTime: '2020-11-20',
          deadline: 13000, // 毫秒
          detailInfo: {
            name: '海南罗牛山公司',
            address: '海南省海口市**区**路**号',
            phone: '231231231231',
            expirationDate: '2个月',
            type: '白猪肉',
            origin: '中国大陆',
            province: '海南省'
          }
        },
        {
          id: 2,
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          killTime: '2020-11-20',
          deadline: 134000, // 毫秒
          detailInfo: {
            name: '海南罗牛山公司',
            address: '海南省海口市**区**路**号',
            phone: '231231231231',
            expirationDate: '2个月',
            type: '白猪肉',
            origin: '中国大陆',
            province: '海南省'
          }
        },
        {
          id: 3,
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          killTime: '2020-11-20',
          deadline: 103000, // 毫秒
          detailInfo: {
            name: '海南罗牛山公司',
            address: '海南省海口市**区**路**号',
            phone: '231231231231',
            expirationDate: '2个月',
            type: '白猪肉',
            origin: '中国大陆',
            province: '海南省'
          }
        }
      ]
    }
  },
  methods: {
    back,
    toUrl,
    async getPigList () {
      const res = await getPigList()
      this.dataList = res.data.list
    }
  }
  // 恢复以下注释，请求页面数据
  // mounted () {
  //   this.getPigList()
  // }
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
      border-radius: 10px;
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
        border-radius: 10px;
      }
      .block {
        height: 36px;
        padding: 0 10px;
        font-size: 22px;
        color: #fff;
        border-radius: 6px;
        background-color: #B22E2A;
      }
    }
    .pig-info-detail {
      width: 100%;
      height: 0px;
      opacity: 0;
      background-color: #fff;
      border-radius: 10px;
      border-top: 1px solid #F1F1F0;
      .detail-img {
        height: 32px;
      }
      .border {
        border-bottom: 1px solid rgba(241, 241, 240, 1)
      }
      .pin-btn {
        height: 80px;
        line-height: 80px;
        color: #fff;
        font-weight: bold;
        text-align: center;
        background-color: #B22E2A;
        border-radius: 0px 0px 10px 10px;
      }
      &.actived {
        height: auto;
        opacity: 1;
      }
    }
    .border-top-none {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .border-bottom-none {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 1s ease;
    max-height: 1000px;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
    max-height: 0px;
  }
}
</style>
