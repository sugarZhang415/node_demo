<template>
  <div id="app">
    <div><router-link to="/">主页</router-link></div>
    <div><router-link to="/events">事件</router-link></div>
    <div><router-link to="/form">表单</router-link></div>
    <div><router-link to="/component-demo">组件传参</router-link></div>
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
