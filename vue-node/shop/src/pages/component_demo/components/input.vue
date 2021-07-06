<template>
  <div>
      <input class='input' v-model="val"/>
      <van-button @click="handle">提交</van-button>
  </div>
</template>

<script>
export default {
    
    data(){
        return {
            val:'',
        }
    },
    methods:{
       handle(){
           this.$emit('add',this.val)// add是父组件要触发的事件，名称定义在父组件
       } 
    }
}
</script>

<style scoped>
.input {
    margin: 23px;
}
</style>