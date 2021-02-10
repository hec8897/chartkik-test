import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import axios from 'axios'


Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false
Vue.prototype.$Axios = axios;


Chartkick.options = {
  colors: ["#224444", "#224444"]
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
