<template>
  <div class="p-pin-pig-wrap">
    <van-nav-bar
      left-arrow
      title="拼猪"
      left-text="返回"
      @click-left="back">
    </van-nav-bar>
    <div class="c-page-wrap">
      <div class="c-mb-20 pig-info-wrap">
        <div class="c-d-f c-ai-c c-p-20 c-fs-22 pig-info-top">
          <img :src="pigInfo.img" class="info-img">
          <div class="c-ml-40 c-c-text-grey text-wrap">
            <span class="c-fs-28 c-c-text-red c-fw-b">{{pigInfo.title}}</span>
            <div class="c-d-f c-jc-sb c-ai-c">
              <span>预计屠宰时间：{{pigInfo.killTime}}</span>
            </div>
            <div class="c-d-f c-ai-c">
              <span>竞拍截止时间：</span>
              <van-count-down :time="pigInfo.deadline">
                <template #default="timeData">
                  <span class="block">{{timeData.days && timeData.days + '天' || ''}}{{ timeData.hours }}:{{ timeData.minutes }}:{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
          </div>
        </div>
      </div>
      <div class="tree-list-wrap">
        <van-tabs v-model="activeName" color="#B22E2A" background="#F3F3F3" title-active-color="#373737" title-inactive-color="#B3B3B3" sticky>
          <van-tab title="部位分类">
            <div class="c-mt-30" v-if="activeName === 0">
              <van-tree-select :items="placeItems" :main-active-index.sync="placeTreeActive" @click-nav="arg => selectTree(arg, 1)">
                <template #content>
                  <div v-if="placeGoodsList.length > 0">
                    <div v-for="(item, index) in placeGoodsList" :key="index" class="c-ml-20 c-mb-20 c-mr-10 c-bc-white c-br-10">
                      <div class="c-d-f c-ai-c c-p-r c-pl-20 c-ptb-15 border">
                        <img v-if="item.isHighest" src="../assets/card-red1.png" class="highest-img">
                        <img v-if="item.isOutPrice" src="../assets/card-yellow1.png" class="highest-img">
                        <img src="../assets/pai.png" class="c-mr-20 pai-img">
                        <span class="c-fs-30 c-fw-b c-c-text-color-dark">{{item.name}}</span>
                      </div>
                      <div class="c-d-f c-ai-c c-p-20 c-pl-20 c-fs-24 c-c-text-grey pig-order-detail">
                        <img :src="item.img" class="info-img">
                        <div class="c-ml-30 text-wrap c-w-100">
                          <div class="c-d-f c-fs-20">
                            <div class="c-tag-yellow">预估重量：{{item.weight}}斤</div>
                            <div class="c-ml-10 c-tag-red">即时价格：{{item.immediatePrice}}元</div>
                          </div>
                          <div class="c-d-f c-jc-sb c-ai-fe">
                            <div class="c-d-f c-fd-c c-ai-c">
                              <span class="c-mb-5 c-c-text-grey-dark c-fw-5">竞拍价格</span>
                              <van-stepper v-model="item.dealPrice" step="0.1" :decimal-length="1" />
                            </div>
                            <div class="c-p-r pai-btn" @click="clickItem(item)">
                              <span class="c-p-c">竞 拍</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <van-empty v-else description="暂无内容" />
                </template>
              </van-tree-select>
            </div>
          </van-tab>
          <van-tab title="做法分类">
            <div class="c-mt-30" v-if="activeName === 1">
              <van-tree-select :items="menuItems" :main-active-index.sync="menuTreeActive" @click-nav="arg => selectTree(arg, 2)">
                <template #content>
                  <div v-if="menuGoodsList.length > 0">
                    <div v-for="(item, index) in menuGoodsList" :key="index" class="c-ml-20 c-mb-20 c-mr-10 c-bc-white c-br-10">
                      <div class="c-d-f c-ai-c c-pl-20 c-ptb-15 border">
                        <img src="../assets/pai.png" class="c-mr-20 pai-img">
                        <span class="c-fs-30 c-fw-b c-c-text-color-dark">{{item.name}}</span>
                      </div>
                      <div class="c-d-f c-ai-c c-p-20 c-pl-20 c-fs-24 c-c-text-grey pig-order-detail">
                        <img :src="item.img" class="info-img">
                        <div class="c-ml-30 text-wrap c-w-100">
                          <div class="c-d-f c-fs-20">
                            <div class="c-tag-yellow">预估重量：{{item.weight}}斤</div>
                            <div class="c-ml-10 c-tag-red">即时价格：{{item.immediatePrice}}元</div>
                          </div>
                          <div class="c-d-f c-jc-sb c-ai-fe">
                            <div class="c-d-f c-fd-c c-ai-c">
                              <span class="c-mb-5 c-c-text-grey-dark c-fw-5">竞拍价格</span>
                              <van-stepper v-model="item.dealPrice" step="0.1" :decimal-length="1" />
                            </div>
                            <div class="c-p-r pai-btn" @click="clickItem(item)">
                              <span class="c-p-c">竞 拍</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <van-empty v-else description="暂无内容" />
                </template>
              </van-tree-select>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { back, toUrl } from '../shared/util'
import { getPigPartInfo, getPartList } from '../api/api'
export default {
  name: 'pinPig',
  data () {
    return {
      pigId: '',
      placeTreeActive: 0,
      menuTreeActive: 0,
      activeName: 0,
      stepValue: 1,
      // 部位分类树
      placeItems: [{
        id: 1,
        text: '肋排'
      }, {
        id: 2,
        text: '里脊'
      }, {
        id: 3,
        text: '前腿',
        dot: true
      }, {
        id: 4,
        text: '前肘'
      }, {
        id: 5,
        text: '后腿'
      }, {
        id: 6,
        text: '小排'
      }, {
        id: 7,
        text: '五花肉'
      }, {
        id: 8,
        text: '...'
      }],
      // 做法分类数
      menuItems: [{
        id: 1,
        text: '煲汤'
      }, {
        id: 2,
        text: '红烧'
      }, {
        id: 3,
        text: '烧烤',
        dot: true
      }],
      pigInfo: {
        img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
        title: '1号猪（97182365）',
        killTime: '2020-11-20',
        deadline: 86410000
      },
      // 按部位分类的右侧 list
      placeGoodsList: [{
        id: 1,
        name: '肋排1',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        // 已出价
        isBid: true,
        // 最高价
        highest: true,
        weight: 4,
        // 即时价格
        immediatePrice: 40,
        // 竞拍价格
        dealPrice: 40.1,
        isHighest: false,
        isOutPrice: true
      }, {
        id: 2,
        name: '肋排2',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        isBid: true,
        highest: true,
        weight: 4,
        immediatePrice: 40,
        dealPrice: 40.2,
        isHighest: true,
        isOutPrice: false
      }, {
        id: 3,
        name: '肋排2',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        isBid: true,
        highest: true,
        weight: 4,
        immediatePrice: 40,
        dealPrice: 40.2
      }, {
        id: 4,
        name: '肋排2',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        isBid: true,
        highest: true,
        weight: 4,
        immediatePrice: 40,
        dealPrice: 40.2
      }, {
        id: 5,
        name: '肋排2',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        isBid: true,
        highest: true,
        weight: 4,
        immediatePrice: 40,
        dealPrice: 40.2
      }, {
        id: 6,
        name: '肋排2',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        isBid: true,
        highest: true,
        weight: 4,
        immediatePrice: 40,
        dealPrice: 40.2
      }, {
        id: 7,
        name: '肋排2',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        isBid: true,
        highest: true,
        weight: 4,
        immediatePrice: 40,
        dealPrice: 40.2
      }],
      // 按做法分类的右侧 list
      menuGoodsList: [{
        id: 1,
        name: '肋排1',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        // 已出价
        isBid: true,
        // 最高价
        highest: true,
        weight: 4,
        // 即时价格
        immediatePrice: 40,
        // 竞拍价格
        dealPrice: 40.2
      }, {
        id: 2,
        name: '肋排2',
        img: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
        isBid: true,
        highest: true,
        weight: 4,
        immediatePrice: 40,
        dealPrice: 40.2
      }]
    }
  },
  methods: {
    back,
    toUrl,
    async getPageInfo (pigId) {
      const res = await getPigPartInfo({ pigId })
      console.log(res)
    },
    async selectTree (index, type) {
      let currentTreeNode = {}
      currentTreeNode = type === 1 ? this.placeItems[index] : this.menuItems[index]
      const res = await getPartList()
      const list = res.data || []
      type === 1 ? this.placeGoodsList = list : this.menuGoodsList = list
      console.log('place', index, currentTreeNode)
    },
    clickItem (id) {
      console.log('竞拍了：', id)
    }
  }
  // 恢复以下注释，请求页面数据
  // mounted () {
  //   this.pigId = this.$route.query.pigId || ''
  //   this.getPageInfo(this.pigId)
  // }
}
</script>
<style lang="scss">
.p-pin-pig-wrap {
  // .pin-page-wrap {
  //   display: flex;
  //   flex-direction: column;
  //   height: calc(100vh - 46PX);
  //   padding: 20px 30px;
  //   background: #F3F3F3;
  //   border: 1px solid blue;
  //   overflow: auto;
  // }
  .van-sidebar-item--select {
    color: #B22E2A;
    background-color: #fff!important;
    border-radius: 20px;
  }
  .van-sidebar-item--select::before {
    background-color: #fff;
  }
  .van-sidebar-item {
    // width: 120px!important;
    font-size: 26px;
    background-color: #F3F3F3;
  }
  // .van-sidebar {
  //   width: 30px!important;
  // }
  .van-tree-select {
    height: calc(100vh - 100px)!important;
  }
  .van-tree-select__content {
    flex: 5!important;
  }
  .van-tree-select__nav-item {
    padding: 24px 4px;
  }
  .van-stepper__input {
    width: 80px;
    height: 42px;
    font-size: 24px;
  }
  .van-stepper__minus {
    width: 40px;
    height: 42px;
  }
  .van-stepper__plus {
    width: 40px;
    height: 42px;
  }
  .van-tabs--line .van-tabs__wrap {
    height: 80px;
  }
  .van-tab {
    font-size: 28px;
  }

  .pig-info-wrap {
    background-color: #B22E2A;
    border-radius: 10px;
    box-shadow: 6px 11px 11px 2px rgba(120, 51, 16, 0.06);
    .pig-info-top {
      width: 100%;
      height: 200px;
      text-align: left;
      background-color: #fff;
      border-radius: 10px;
      border-top-right-radius: 40px;
      .text-wrap {
        width: calc(100% - 230px);
        height: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .info-img {
        width: 260px;
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
  }
  .tree-list-wrap {
    .border {
      border-bottom: 1px solid rgba(212, 65, 62, .2)
    }
    .pai-img {
      width: 32px;
    }
    .highest-img {
      width : 90px;
      display: block;
      position: absolute;
      top: 20px;
      right: -10px;
    }
    .pig-order-detail {
      width: 100%;
      height: 180px;
      background-color: #fff;
      border-radius: 10px;
      .text-wrap {
        // width: calc(100% - 230px);
        height: 100%;
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
  }
}
</style>
