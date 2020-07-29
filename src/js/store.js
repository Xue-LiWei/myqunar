import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
      gettop:0
  },
  mutations:{
      gettop(state,thetop){
        state.gettop=thetop
      }
  }
})
