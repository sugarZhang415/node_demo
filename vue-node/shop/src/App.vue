<template>
  <div id="app">
    vue基础
    <div><router-link to="/events">事件</router-link></div>
    <div><router-link to="/form">表单</router-link></div>
    <div><router-link to="/component-demo">组件传参(父子&兄弟)</router-link></div>
    vue高级特性
    <div><router-link to="/advance-use">自定义组件</router-link></div>
    <div><router-link to="/nextTick">$nextTick</router-link></div>
    <div><router-link to="/slot">slot</router-link></div>
    <div><router-link to="/scoped-slot">scoped_slot</router-link></div>
    <div><router-link to="/dongtai">动态组件</router-link></div>
    <div><router-link to="/yibu">异步组件</router-link></div>
    <div><router-link to="/keep-alive">keep-alive缓存</router-link></div>
    <div><router-link to="/mixin">mixin</router-link></div>
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
