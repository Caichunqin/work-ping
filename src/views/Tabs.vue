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
      <van-tabbar-item to="/order">
        <span>我的订单</span>
        <template #icon="props">
          <img :src="props.active ? orderIcon.active : orderIcon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <!-- <div class="footer">
      <div class="c-f-1">
        <router-link to="index">
          <div @click.stop="activeIndex = 1" class="tab-item">
            <img class="index-img" v-show="activeIndex === 1" src="../assets/index-red.png">
            <img class="index-img" v-show="activeIndex === 2" src="../assets/index-grey.png">
            <span>首页</span>
          </div>
        </router-link>
      </div>
      <div class="c-f-1">
        <router-link to="order">
          <div @click.stop="activeIndex = 2" class="tab-item">
            <img class="index-img" v-show="activeIndex === 2" src="../assets/order-red.png">
            <img class="index-img" v-show="activeIndex === 1" src="../assets/order-grey.png">
            <span>我的订单</span>
          </div>
        </router-link>
      </div>
    </div> -->
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
      }
    }
  }
}
</script>

<style lang="scss">
.p-tabs-wrap {
  .tab-content {
    min-height: calc(100vh - 50px);
    padding-bottom: 50px;
    padding: 20px 30px;
    background: #F3F3F3;
  }
  // .footer {
  //   display: flex;
  //   align-items: center;
  //   height: 50px;
  //   background-color: white;
  //   .tab-item {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     width: 50%;
  //     .index-img {
  //       width: 16px;
  //     }
  //   }
  // }
}
</style>
