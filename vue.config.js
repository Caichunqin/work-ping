module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    proxy: 'https://www.baidu.com'
  },
  css: {
    // 默认生产环境提取css文件，在多层级目录下会有路径问题，此处禁止提取css文件
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/style/variables.scss";
        `
        // sassOptions: {
        //   outputStyle: 'expanded'
        // }
      },
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'text-color': '#111',
            'border-color': '#eee',
            'tree-select-item-active-color': '#B22E2A',
            'tree-select-nav-background-color': '#F3F3F3',
            'tree-select-content-background-color': '#F3F3F3',
            'tabs-bottom-bar-width': '26px'
            // 'stepper-background-color': '#fff'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            // hack: 'true; @import "your-less-file-path.less";'
          }
        }
      },
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 100, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, // 默认false，/(node_module)/ 可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    }
  }
}
