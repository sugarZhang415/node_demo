<template>
  <div>
      <p>{{name}} {{major}} {{city}}</p>
      <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
import myMixin from './mixin.js'
export default {
    mixins: [myMixin],//可以添加多个，会自动合并起来
    data(){
        return {
            name:'凯琴',
            major: 'web前端'
        }
    }
}
</script>

<style>

</style>