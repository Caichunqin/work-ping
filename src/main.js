import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Button, NavBar, Icon, CountDown, TreeSelect, Tab, Tabs, Stepper, Empty } from 'vant'

Vue.config.productionTip = false
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(CountDown)
Vue.use(TreeSelect)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Stepper)
Vue.use(Empty)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
