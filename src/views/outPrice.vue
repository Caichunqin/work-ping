<template>
  <div class="p-myoutprice-wrap">
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
              <div class="c-d-f c-jc-sb c-ai-c" @click="activeIndex = activeIndex === index ? '' : index">
                <div>
                  <span>订单金额：</span><span class="c-fs-24 c-fw-b c-c-text-red">{{item.totalPrice}}</span>
                </div>
                <van-icon :name="activeIndex === index ? 'arrow-up':'arrow-down'"/>
              </div>
              <div class="arrow-wrap" style="width: 70%;">
                <van-field
                  readonly
                  clickable
                  :right-icon="showPickerindex === index ? 'arrow-up' : 'arrow-down'"
                  label="收货地址："
                  :value="item.addressLabel"
                  placeholder="选择收货地址"
                  @click="showPickerindex = index"
                />
                <van-popup v-model="showPicker" v-if="showPickerindex === index" :close-on-click-overlay="false" position="bottom" round :style="{ height: '40%' }">
                  <van-picker
                    show-toolbar
                    :visible-item-count="4"
                    value-key="text"
                    :columns="option"
                    @cancel="showPickerindex = -1"
                    @confirm="value => changeAddress(value, item, index)"
                  />
                </van-popup>
              </div>
            </div>
          </div>
            <div class="pig-info-detail" :class="activeIndex === index ? 'actived border-top-none': ''" v-for="(listItem, idx) in item.list" :key="idx">
              <!-- <img src="../assets/card-red1.png" class="highest-img" v-if="listItem.highestPrice"> -->
              <div class="c-d-f c-jc-sb c-plr-20 c-pt-20 c-w-100">
                <span>订单编号：{{listItem.orderNumber}}</span>
                <span>订单状态：{{listItem.status}}</span>
              </div>
              <div class="c-d-f c-ai-c c-pl-20 c-pt-15">
                <div class="c-line-red c-mr-10"></div>
                <span class="c-fs-26 c-fw-b c-c-text-color-dark">{{listItem.name}}</span>
              </div>
              <div class="c-d-f c-ai-c c-p-20 c-pl-55 c-fs-22 c-c-text-grey pig-order-detail">
                <img :src="listItem.partImg" class="info-img">
                <div class="c-ml-30 text-wrap c-w-100">
                  <div>
                    <span>基础价格：</span><span class="c-c-text-red c-mr-40">{{listItem.basePrice}}</span>
                    <span>购买重量：{{listItem.weight}}</span>
                  </div>
                  <div>
                    <span>成交价格：</span><span class="c-c-text-red c-mr-40">{{listItem.dealPrice}}</span>
                    <span>收货人：{{listItem.receiver}}</span>
                  </div>
                  <span v-if="listItem.status === '已完成'">成交时间：{{listItem.dealTime}}</span>
                </div>
              </div>
            </div>
        </div>
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
      showPickerindex: -1,
      showPicker: true,
      dataList: [
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '1号猪（97182365）',
          status: '已完成',
          totalPrice: '82元',
          // addressValue: '',
          // addressLabel: '上海市闵行区巴啦啦啦啦巴拉巴拉',
          list: [{
            name: '肋排',
            orderNumber: '4397815389fdhbvdfj',
            status: '已完成',
            partImg: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
            basePrice: '40.22元',
            weight: '3斤',
            dealPrice: '40.12元',
            receiver: '张老师',
            dealTime: '2020-10-24 10:20:23'
          }, {
            name: '肋排',
            orderNumber: '4397815389fdhbvdfj',
            status: '已取消',
            partImg: 'https://img.jk51.com/img_jk51/112164879.jpeg',
            basePrice: '40.21元',
            weight: '3斤',
            dealPrice: '40.12元',
            receiver: '张老师',
            dealTime: '2020-10-24 10:20:23'
          }]
        },
        {
          img: 'http://pic29.photophoto.cn/20131225/0035035981830687_b.jpg',
          title: '2号猪（97182365）',
          status: '已完成',
          totalPrice: '82元',
          addressValue: '',
          addressLabel: '重庆市渝北区中央公园巴啦巴啦啦啦啦啦',
          list: [{
            name: '肋排',
            orderNumber: '4397815389fdhbvdfj',
            status: '已完成',
            partImg: 'https://tse3-mm.cn.bing.net/th/id/OIP.we_pQY7hkturwMQ9Uzd1hgHaE6?pid=Api&rs=1',
            basePrice: '40.22元',
            weight: '3斤',
            dealPrice: '40.12元',
            receiver: '张老师',
            dealTime: '2020-10-24 10:20:23'
          }, {
            name: '肋排',
            orderNumber: '4397815389fdhbvdfj',
            status: '已取消',
            partImg: 'https://img.jk51.com/img_jk51/112164879.jpeg',
            basePrice: '40.21元',
            weight: '3斤',
            dealPrice: '40.12元',
            receiver: '张老师',
            dealTime: '2020-10-24 10:20:23'
          }]
        }
      ],
      option: [
        {
          text: '上海市闵行区巴啦啦啦啦巴拉巴拉',
          value: 1
        },
        {
          text: '重庆市渝北区中央公园巴啦巴啦啦啦啦啦巴啦巴',
          value: 2
        },
        {
          text: '武汉市武昌区白沙洲大道芭芭拉',
          value: 3
        }]
    }
  },
  methods: {
    back,
    toUrl,
    async getOrderList () {
      const res = await getOrderList()
      this.dataList = res.data.list
    },
    changeAddress (value, item, index) {
      this.showPickerindex = -1
      // addressValue - 地址key, addressLabel - 地址展示的值
      this.dataList[index].addressLabel = value.text
      this.dataList[index].addressValue = value.value
      console.log('改变后的地址', value)
      console.log('当前操作的订单信息', item)
    }
  }
  // mounted () {
  //   this.getOrderList()
  // }
}
</script>

<style lang="scss">
.p-myoutprice-wrap {
  .van-cell {
    font-size: 22px!important;
    color: #7F7F7F!important;
    padding: 0 0!important;
    line-height: normal!important;
  }
  .van-field__label {
    width: auto!important;
    margin-right: 0!important;
    color: #7F7F7F!important;
  }
  .van-cell__value {
    padding-left: 5px!important;
    padding-right: 5px!important;
    border: 1px solid #A9A9A9!important;
  }
  .van-field__control {
    color: #7F7F7F!important;
  }

  .pig-info-wrap {
    text-align: left;
    .arrow-wrap {
      .van-icon {
        font-size: 22px!important;
      }
    }
    .pig-info-top {
      width: 100%;
      height: 200px;
      background-color: #fff;
      border-radius: 10px;
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
        height: 186px;
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
}
</style>
