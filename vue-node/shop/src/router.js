import Vue from 'vue'
import Router from 'vue-router'
  
//组件模块
import HelloWorld from './components/HelloWorld.vue'
import Events from './pages/events/index.vue'
import Form from './pages/form/index.vue'
import ComponentDemo from './pages/component_demo/index.vue'
import AdvanceUse from './pages/advance_use/index.vue'
import NextTick from './pages/nextTick/index.vue'
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/events', name: 'Events', component: Events },
    { path: '/form', name: 'Form', component: Form },
    { path: '/component-demo', name: 'ComponentDemo', component: ComponentDemo },
    { path: '/advance-use', name: 'AdvanceUse', component: AdvanceUse },
    { path: '/nextTick', name: 'NextTick', component: NextTick },
  ]
})