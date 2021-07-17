<template>
  <div>
    <!-- 通过实例的方法获取state -->
      <!-- 在模板中直接获取count:{{this.$store.state.count}} -->
      <!-- 通常我们会把state放在计算属性中   -->
      count：{{countNum}}
      <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  computed:{
    countNum(){
      return this.$store.state.count
    }
  },
  methods:{
    add(){
      this.$store.commit('addCount',2)
    }
  }
}
</script>

<style>

</style>