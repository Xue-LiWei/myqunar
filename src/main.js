import Vue from 'vue'
import App from './App.vue'
import '../node_modules/mint-ui/lib/style.css'

//路由
import VueRouter from 'vue-router'
import router from './js/router'
Vue.use(VueRouter)

//mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);

//axios
import axios from 'axios';
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
