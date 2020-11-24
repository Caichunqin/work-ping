<template>
  <div class="p-myorder-wrap">
    <van-nav-bar
      title="我的订单">
    </van-nav-bar>
    <div class="c-page-wrap">
      <div class="c-fs-24 c-fw-4 c-mb-20 pig-info-wrap" v-for="(item, index) in dataList" :key="index">
        <div v-if="item.status === '已完成'">
          <div class="c-d-f c-ai-c c-p-20 c-fs-22 pig-info-top" :class="activeIndex === index ? 'border-bottom-none' : ''">
            <img :src="item.img" class="info-img">
            <div class="c-ml-30 c-c-text-grey text-wrap">
              <span class="c-fs-28 c-c-text-color-dark c-fw-b">{{item.title}}</span>
              <div class="c-d-f c-jc-sb c-ai-c" @click="activeIndex = activeIndex === '' ? index : ''">
                <span>订单状态：{{item.status}}</span>
                <van-icon :name="activeIndex === index ? 'arrow-up':'arrow-down'"/>
              </div>
              <div class="c-d-f c-ai-c">
                <span>实付金额：</span>
                <span class="c-fs-24 c-fw-b c-c-text-red">{{item.totalPrice}}</span>
              </div>
            </div>
          </div>
          <!-- <transition name="slide-fade"> -->
            <div class="pig-info-detail" :class="activeIndex === index ? 'actived border-top-none': ''" v-for="(listItem, idx) in item.list" :key="idx">
              <div class="c-d-f c-ai-c c-pl-20 c-pt-20">
                <div class="c-line-red c-mr-10"></div>
                <span class="c-fs-26 c-fw-b c-c-text-color-dark">{{listItem.name}}</span>
              </div>
              <div class="c-d-f c-ai-c c-p-20 c-pl-55 c-fs-26 c-c-text-grey pig-order-detail">
                <img :src="listItem.partImg" class="info-img">
                <div class="c-ml-30 text-wrap c-w-100">
                  <span class="c-fs-24">基础价格：{{listItem.basePrice}} 元</span>
                  <div class="c-fw-5">
                    <span>购买重量：</span><span class="c-c-text-red c-mr-20">{{listItem.weight}}斤</span>
                    <span>成交价格：</span><span class="c-c-text-red">{{listItem.dealPrice}}元</span>
                  </div>
                </div>
              </div>
            </div>
          <!-- </transition> -->
        </div>

        <div v-if="item.status === '已确认'">
          <div class="c-d-f c-ai-c c-p-20 c-fs-22 pig-info-top" :class="activeIndex === index ? 'border-bottom-none' : ''">
            <img :src="item.img" class="info-img">
            <div class="c-ml-30 c-c-text-grey text-wrap">
              <span class="c-fs-28 c-c-text-color-dark c-fw-b">{{item.title}}</span>
              <div class="c-d-f c-jc-sb c-ai-c" @click="activeIndex = activeIndex === '' ? index : ''">
                <span>订单状态：{{item.status}}</span>
                <van-icon :name="activeIndex === index ? 'arrow-up':'arrow-down'"/>
              </div>
              <div class="c-d-f c-ai-c">
                <span>合计金额：</span>
                <span class="c-fs-24 c-fw-b c-c-text-red">{{item.totalPrice}}</span>
              </div>
            </div>
          </div>
          <!-- <transition name="slide-fade"> -->
            <div class="pig-info-detail" :class="activeIndex === index ? 'actived border-top-none': ''" v-for="(listItem, idx) in item.list" :key="idx">
              <div class="highest-img-wrap" v-if="listItem.highestPrice">
                <img src="../assets/card-red.png" class="highest-img">
                <span class="c-p-c c-fs-18 c-fw-5 c-c-white">最高价</span>
              </div>
              <div class="c-d-f c-ai-c c-pl-20 c-pt-20">
                <div class="c-line-red c-mr-10"></div>
                <span class="c-fs-26 c-fw-b c-c-text-color-dark">{{listItem.name}}</span>
              </div>
              <div class="c-d-f c-ai-c c-p-20 c-pl-55 c-fs-26 c-c-text-grey pig-order-detail">
                <img :src="listItem.partImg" class="info-img">
                <div class="c-ml-30 text-wrap c-w-100">
                  <div class="c-fs-24">
                    <span class="c-mr-30">预估重量：{{listItem.weight}}斤</span>
                    <span>即时价格：{{listItem.basePrice}}元</span>
                  </div>
                  <div class="c-fw-5">
                    <span>竞拍价格：</span><span class="c-c-text-red">{{listItem.dealPrice}}元</span>
                  </div>
                </div>
              </div>
            </div>
          <!-- </transition> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { back, toUrl } from '../shared/util'
export default {
  data () {
    return {
      activeIndex: '',
      dataList: [
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          status: '已完成',
          totalPrice: '82元',
          list: [{
            name: '肋排',
            partImg: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
            basePrice: '40',
            weight: '3',
            dealPrice: '40.12'
          }, {
            name: '肋排',
            partImg: 'https://img.jk51.com/img_jk51/112164879.jpeg',
            basePrice: '40',
            weight: '3',
            dealPrice: '40.12'
          }]
        },
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '2号猪（97182365）',
          status: '已确认',
          totalPrice: '82元',
          list: [{
            name: '肋排',
            highestPrice: true,
            partImg: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
            basePrice: '40',
            weight: '3',
            dealPrice: '40.12'
          }, {
            name: '肋排',
            highestPrice: false,
            partImg: 'https://img.jk51.com/img_jk51/112164879.jpeg',
            basePrice: '40',
            weight: '3',
            dealPrice: '40.12'
          }]
        },
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '3号猪（97182365）',
          status: '已完成',
          totalPrice: '82元',
          list: [{
            name: '肋排',
            partImg: 'https://img.jk51.com/img_jk51/112164879.jpeg',
            basePrice: '40',
            weight: '3',
            dealPrice: '40.12'
          }, {
            name: '肋排',
            partImg: 'https://img.jk51.com/img_jk51/112164879.jpeg',
            basePrice: '40',
            weight: '3',
            dealPrice: '40.12'
          }]
        }
      ]
    }
  },
  methods: {
    back,
    toUrl
  }
}
</script>

<style lang="scss">
.p-myorder-wrap {
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
        padding: 16px 0;
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
        padding: 0 10px;/*no*/
        font-size: 22px;
        color: #fff;
        border-radius: 6px;
        background-color: #B22E2A;
      }
    }
    .pig-info-detail {
      position: relative;
      width: 100%;
      height: 0px;
      opacity: 0;
      background-color: #fff;
      border-top: 1px solid #F1F1F0;/*no*/
      &:nth-last-of-type(1) {
        border-radius: 0 0 10px 10px;
      }
      .highest-img-wrap {
        border: 1px solid green;
        position: absolute;
        top: 24px;
        right: -10px;/*no*/
        width: 120px;
        .highest-img {
          width :100%;
          // position: absolute;
          // top: 24px;
          // right: -10px;/*no*/
          // width: 90px;
        }
      }
      .detail-img {
        height: 32px;
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
      .pig-order-detail {
        width: 100%;
        height: 160px;
        background-color: #fff;
        border-radius: 10px;
        .text-wrap {
          // width: calc(100% - 230px);
          height: 100%;
          padding: 14px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .info-img {
          width: 136px;
          height: 136px;
          object-fit: cover;
          border-radius: 10px;
        }
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
