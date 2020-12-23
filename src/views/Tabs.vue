<template>
  <div class="p-tabs-wrap">
    <keep-alive>
      <router-view class="tab-content"></router-view>
    </keep-alive>
    <van-tabbar v-model="activeIndex" route active-color="#B22E2A" inactive-color="#7F7F7F">
      <van-tabbar-item to="/index">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? indexIcon.active : indexIcon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/outPrice">
        <span>我的订单</span>
        <template #icon="props">
          <img :src="props.active ? orderIcon.active : orderIcon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/order">
        <span>我的出价</span>
        <template #icon="props">
          <img :src="props.active ? outPrice.active : outPrice.inactive" />
        </template>
      </van-tabbar-item>
      <!-- <van-tabbar-item replace to="/order" icon="balance-pay">
        我的出价
      </van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      activeIndex: 1,
      indexIcon: {
        active: require('../assets/index-red.png'),
        inactive: require('../assets/index-grey.png')
      },
      orderIcon: {
        active: require('../assets/order-red.png'),
        inactive: require('../assets/order-grey.png')
      },
      outPrice: {
        active: require('../assets/outprice-red.png'),
        inactive: require('../assets/outprice-grey.png')
      }
    }
  }
}
</script>

<style lang="scss">
.p-tabs-wrap {
  .tab-content {
    min-height: calc(100vh - 96PX);
    padding-bottom: 50PX;
    background: #F3F3F3;
  }
}
</style>
