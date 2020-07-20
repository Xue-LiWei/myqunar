import Vue from 'vue'
import App from './App.vue'
import '../node_modules/mint-ui/lib/style.css'
import './css/cssreset.css'

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

//公共数据
import Vuex from 'vuex'
Vue.use(Vuex);
import store from './js/store'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
