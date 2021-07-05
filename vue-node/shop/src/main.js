import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import 'vant/lib/button/style';
import router from './router';

Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
