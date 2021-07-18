import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js';
Vue.config.productionTip = false
Vue.use(ElementUI);

//全局导航守卫
// router.beforeEach((to,from,next)=>{
//   if(store.state.userInfo || to.path === '/login'){
//     next()
//   }else{
//     next({
//       path:'/login'
//     })
//   }
// })

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
