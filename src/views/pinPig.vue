<template>
  <div class="p-pig-list-wrap">
    <van-nav-bar
      left-arrow
      title="拼猪"
      left-text="返回"
      @click-left="back">
    </van-nav-bar>
    <div class="c-page-wrap">
      <div>
        <van-tabs v-model="activeName" color="#B22E2A" background="transparent" title-active-color="#373737" title-inactive-color="#B3B3B3">
          <van-tab title="部位分类">
            <div class="c-mt-30">
              <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
                <template #content>
                  1
                </template>
              </van-tree-select>
            </div>
          </van-tab>
          <van-tab title="做法分类">
            <div class="c-mt-30">
              <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
                <template #content>

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

export default {
  name: 'pinPig',
  data () {
    return {
      active: 0,
      activeName: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
    }
  },
  methods: {
    back,
    toUrl
  }
}
</script>
<style lang="scss">

</style>
