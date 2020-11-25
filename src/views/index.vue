<template>
  <div class="p-index-wrap">
    <van-nav-bar
      title="罗牛山">
    </van-nav-bar>
    <div class="c-page-wrap">
      <div class="index-top"></div>
      <div class="index-btn-wrap">
        <van-button :icon="require('../assets/guize.png')" block>拼猪规则</van-button>
        <van-button class="btn-right" :icon="require('../assets/wenhao.png')" block>猪肉选购指南</van-button>
      </div>
      <!-- <img class="btn-bottom-img" src="../assets/index-btn.png"> -->
      <div class="c-p-r c-mt-30" @click="toUrl('/pigList')">
        <img class="c-d-b btn-bottom-img" src="../assets/index-btn.png">
        <span class="c-p-c c-fs-38 c-c-white c-fw-b">去拼猪</span>
      </div>
      <!-- <div class="confirm-btn"></div> -->
    </div>
  </div>
</template>

<script>
import { toUrl } from '../shared/util'
export default {
  name: 'index',
  methods: {
    toUrl
  }
}
</script>
<style lang="scss">
.p-index-wrap {
  .van-button {
    border-radius: 10px;
  }

  .index-top {
    height: 770px;
    background-color: #fff;
  }
  .index-btn-wrap {
    display: flex;
    margin-top: 30px;
    .btn-right {
      margin-left: 30px;
    }
  }
  .btn-bottom-img {
    width: 100%;
    // box-shadow: 6px 11px 28px 4px rgba(120, 51, 16, 0.06);
  }
  // .confirm-btn {
  //   height: 100px;
  //   border-radius: 20px;
  //   font-size: 38px;
  //   box-shadow: 6px 11px 28px 4px rgba(120, 51, 16, 0.06);
  // }
}
</style>
