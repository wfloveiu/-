import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式表
import '@/assets/css/global.css'
//引入阿里图标
import '@/assets/fonts/iconfont.css'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
// Vue.use(axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
