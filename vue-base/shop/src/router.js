import Vue from 'vue'
import Router from 'vue-router'
  
//组件模块
import HelloWorld from './components/HelloWorld.vue'
import Events from './pages/events/index.vue'
import Form from './pages/form/index.vue'
import ComponentDemo from './pages/component_demo/index.vue'
import AdvanceUse from './pages/advance_use/index.vue'
import NextTick from './pages/nextTick/index.vue'
import Slot from './pages/slot/index.vue'
import ScopedSlot from './pages/scoped_slot/index.vue'
import Dongtai from './pages/dongtai/index.vue'
import Yibu from './pages/yibu/index.vue'
import KeepAlive from './pages/keep_alive/index.vue'
import Mixin from './pages/mixin/index.vue'
import Vuex from './pages/vuex/index.vue'
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/base',
      component: HelloWorld,
      name:'home',
      children: [
        { path: '/events', name: 'Events', component: Events },
        { path: '/form', name: 'Form', component: Form },
        { path: '/component-demo', name: 'ComponentDemo', component: ComponentDemo },
        { path: '/advance-use', name: 'AdvanceUse', component: AdvanceUse },
        { path: '/nextTick', name: 'NextTick', component: NextTick },
        { path: '/slot', name: 'Slot', component: Slot },
        { path: '/scoped-slot', name: 'ScopedSlot', component: ScopedSlot },
        { path: '/dongtai', name: 'Dongtai', component: Dongtai },
        { path: '/yibu', name: 'Yibu', component: Yibu },
        { path: '/keep-alive', name: 'KeepAlive', component: KeepAlive },
        { path: '/mixin', name: 'Mixin', component: Mixin },
      ]
    },{
      path:'/vuex',
      component:Vuex,
      name:'vuex'
    }
  ]
})