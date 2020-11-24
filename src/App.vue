<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './style/index.scss';
html {
  // 相对设计稿除以10
  // font-size: calc(100vw / 75);
  font-size: 13.333vw
}
body {
  // font-size: calc(100vw / 75);
  // background-color: rgba(243, 243, 243, 1);
  font-size: 13.333vw
}
div, section {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666666;
}
</style>
