<template>
  <div id="app">
    vue基础
    <div><router-link to="/base/events">事件</router-link></div>
    <div><router-link to="/base/form">表单</router-link></div>
    <div><router-link to="/base/component-demo">组件传参(父子&兄弟)</router-link></div>
    vue高级特性
    <div><router-link to="/base/advance-use">自定义组件</router-link></div>
    <div><router-link to="/base/nextTick">$nextTick</router-link></div>
    <div><router-link to="/base/slot">slot</router-link></div>
    <div><router-link to="/base/scoped-slot">scoped_slot</router-link></div>
    <div><router-link to="/base/dongtai">动态组件</router-link></div>
    <div><router-link to="/base/yibu">异步组件</router-link></div>
    <div><router-link to="/base/keep-alive">keep-alive缓存</router-link></div>
    <div><router-link to="/base/mixin">mixin</router-link></div>
    <div><router-link to="/vuex">Vuex</router-link></div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
</style>
