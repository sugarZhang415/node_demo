<template>
  <div className='login'>
    <el-input width='200' v-model="input" placeholder="请输入内容"></el-input>
<el-button @click='handle'>提交</el-button></div>
</template>

<script>
export default {
data() {
    return {
      input: ''
    }
  },
  methods:{
    handle(){
      const that = this
      this.$store.commit('login',{
        userInfo:that.input
      })
      this.$router.push('/vuex')
    }
  }
}
</script>

<style scoped>
.login{
  width:300px
}
</style>