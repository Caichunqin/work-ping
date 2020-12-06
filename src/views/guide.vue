<template>
  <div class="p-guide-wrap">
    <van-nav-bar
      title="拼猪选购指南"
      left-arrow
      left-text="返回"
      @click-left="back">
    </van-nav-bar>
    <div class="c-page-wrap">
      <div class="c-mb-20">
        <!-- <div class="c-fs-36 c-fw-b c-c-text-color-dark c-bc-white">猪肉产品示意图</div> -->
        <img :src="img" class="c-d-b c-w-100">
      </div>
      <div class="c-fs-24 c-fw-4 c-mb-20 pig-info-wrap" v-for="(item, index) in dataList" :key="index">
          <div class="c-d-f c-ai-c c-p-20 c-fs-22 pig-info-top" :class="activeIndex === index ? 'border-bottom-none' : ''">
            <img :src="item.img" class="info-img">
            <div class="c-ml-30 c-c-text-grey text-wrap">
              <span class="c-fs-28 c-c-text-color-dark c-fw-b">{{item.title}}</span>
              <div class="c-d-f c-jc-sb c-ai-c" @click="activeIndex = activeIndex === index ? '' : index">
                <span class="c-fw-b c-c-text-color-dark">| 产品特点 |<span class="c-ml-10 c-fw-n c-c-text-grey">{{item.feature}}</span></span>
                <van-icon :name="activeIndex === index ? 'arrow-up':'arrow-down'"/>
              </div>
              <div class="c-d-f c-ai-c">
                <span class="c-fw-b c-c-text-color-dark c-mr-10">| 烹饪方式 |</span>
                <span>{{item.cooking}}</span>
              </div>
            </div>
          </div>
          <!-- <transition name="slide-fade"> -->
            <div class="pig-info-detail" :class="activeIndex === index ? 'actived border-top-none': ''" v-for="(listItem, idx) in item.list" :key="idx">
              <!-- <img src="../assets/card-red1.png" class="highest-img" v-if="listItem.highestPrice"> -->
              <div class="c-d-f c-ai-c c-pl-20 c-pt-20">
                <div class="c-line-red c-mr-10"></div>
                <span class="c-fs-26 c-fw-b c-c-text-color-dark">{{listItem.name}}</span>
              </div>
              <div class="c-d-f c-ai-c c-p-20 c-pl-55 c-fs-26 c-c-text-grey pig-order-detail">
                <img :src="listItem.partImg" class="info-img">
                <div class="c-ml-30 text-wrap c-w-100">
                  <span class="c-fs-24">{{listItem.descripe}}</span>
                </div>
              </div>
            </div>
          <!-- </transition> -->
      </div>
    </div>
  </div>
</template>
<script>
import { back, toUrl } from '../shared/util'
import { getOrderList } from '../api/api'
export default {
  data () {
    return {
      activeIndex: '',
      img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
      dataList: [
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '五花肉',
          feature: '香嫩多汁，肥而不腻',
          cooking: '红烧、白切',
          list: [{
            name: '烹饪建议1',
            partImg: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
            descripe: '将五花肉切成块将五花肉切成块将五花肉切成块将五花肉切成块'
          }, {
            name: '烹饪建议2',
            partImg: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
            descripe: '将五花肉切成块将五花肉切成块将五花肉切成块'
          }]
        },
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '猪蹄',
          feature: '香嫩多汁，肥而不腻',
          cooking: '红烧、白切',
          list: [{
            name: '烹饪建议',
            partImg: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
            descripe: '将五花肉切成块将五花肉切成块'
          }]
        }
      ]
    }
  },
  methods: {
    back,
    toUrl,
    async getOrderList () {
      const res = await getOrderList()
      this.dataList = res.data.list
    }
  }
  // 恢复以下注释，请求页面数据
  // mounted () {
  //   this.getOrderList()
  // }
}
</script>

<style lang="scss">
.p-guide-wrap {
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
        // padding: 16px 0;
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
      position: relative;
      width: 100%;
      height: 0px;
      opacity: 0;
      background-color: #fff;
      border-top: 1px solid #F1F1F0;
      &:nth-last-of-type(1) {
        border-radius: 0 0 10px 10px;
      }
      // .highest-img-wrap {
      //   border: 1px solid green;
      //   position: absolute;
      //   top: 24px;
      //   right: -10px;
      //   width: 100px;
      //   .highest-img {
      //     width :100%;
      //     display: block;
      //   }
      //   .highest-text {
      //     position: absolute;
      //     top: 6px;
      //     left: 50%;
      //     transform: translateX(-50%);
      //   }
      // }
      .highest-img {
        width : 90px;
        display: block;
        position: absolute;
        top: 24px;
        right: -10px;
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
          // padding: 14px 0;
          // display: flex;
          // flex-direction: column;
          // justify-content: space-between;
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
