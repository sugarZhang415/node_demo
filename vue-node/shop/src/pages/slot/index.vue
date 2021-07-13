<template>
  <div>
      <!-- slot基本使用 -->
      <SlotDemo :url='website.url'>
          {{website.title}}
      </SlotDemo>
      <hr>
      <!-- 中间不穿内容，子组件slot中显示自己本身的内容，中间写内容，替换子组件中slot中间内容 -->
      <SlotDemo :url='website.url'/>
  </div>
</template>

<script>
import SlotDemo from './components/child.vue'
export default {
    components: {
        SlotDemo
    },
    data(){
        return {
            website:{
                url:'http://www.baidu.com',
                title:'百度',
            }
        }
    }
}
</script>

<style>

</style>