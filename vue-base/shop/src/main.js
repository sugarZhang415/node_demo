import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuex from 'vuex';
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
   state:{
    count:0
   },
   mutations:{
     addCount(state,val){
       state.count = state.count + val
     }
   }
})
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
