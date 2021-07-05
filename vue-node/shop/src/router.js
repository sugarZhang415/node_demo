import Vue from 'vue'
import Router from 'vue-router'
  
//组件模块
import HelloWorld from './components/HelloWorld.vue'
import Events from './pages/events/index.vue'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/main', name: 'Main', component: Events },
  ]
})