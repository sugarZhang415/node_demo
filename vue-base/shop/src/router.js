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

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export const routes = [{
  path: '/login',
  component: ()=>import('./pages/login/index.vue'),
  name: 'login',
  title: '登录'
},{
    path: '/vuex',
    component: Vuex,
    name: 'vuex',
    title: 'vuex'
  },
  {
    path: '/base',
    component: HelloWorld,
    title: 'vue基础',
    children: [
      { path: 'events', name: 'Events', title: '事件', component: Events },
      { path: 'form', name: 'Form', title: '表单', component: Form },
      { path: 'component-demo', name: 'ComponentDemo', title: '组件', component: ComponentDemo },
      { path: 'advance-use', name: 'AdvanceUse', title: '自定义组件', component: AdvanceUse },
      { path: 'nextTick', name: 'NextTick', title: 'nextTick', component: NextTick },
      { path: 'slot', name: 'Slot', title: '插槽', component: Slot },
      { path: 'scoped-slot', name: 'ScopedSlot', title: '作用于插槽', component: ScopedSlot },
    ]
  }, {
    path: '/better',
    component: HelloWorld,
    title: 'vue高级',
    children: [
      { path: 'dongtai', name: 'Dongtai', title: '动态组件', component: Dongtai },
      { path: 'yibu', name: 'Yibu', title: '异步组件', component: Yibu },
      { path: 'keep-alive', name: 'KeepAlive', title: 'keep-alive', component: KeepAlive },
      { path: 'mixin', name: 'Mixin', title: '混入', component: Mixin },
    ]
  }
]

export default new Router({
  routes
})