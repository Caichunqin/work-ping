module.exports = {
  css: {
    // 默认生产环境提取css文件，在多层级目录下会有路径问题，此处禁止提取css文件
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/style/variables.scss";
        `
      }
    }
  }
}
