<template>
  <div class="p-index-wrap">
    <van-nav-bar
      title="罗牛山">
    </van-nav-bar>
    <div class="c-d-f c-fd-c index-page-wrap">
      <div class="index-top"></div>
      <div>
        <div class="index-btn-wrap">
          <van-button :icon="require('../assets/guize.png')" block>拼猪规则</van-button>
          <van-button class="btn-right" :icon="require('../assets/wenhao.png')" @click="toUrl('/guide')" block>猪肉选购指南</van-button>
        </div>
        <div class="c-p-r c-mt-30" @click="toUrl('/pigList')">
          <img class="c-d-b btn-bottom-img" src="../assets/index-btn.png">
          <span class="c-p-c c-fs-38 c-c-white c-fw-b">去拼猪</span>
        </div>
      </div>
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

  .index-page-wrap {
    min-height: calc(100vh - 96PX);
    padding: 20px 30px;
    padding-bottom: 30px;
    background: #F3F3F3;
  }
  .index-top {
    flex: 1;
    // height: 820px;
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
  }
}
</style>
