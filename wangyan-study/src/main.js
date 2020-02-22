import Vue from 'vue'
import 'lib-flexible/flexible'
// 搭建路由
import router from './router/index'
import store from './store/index'
import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
Vue.component(Button.name,Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
