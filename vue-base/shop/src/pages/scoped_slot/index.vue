<template>
  <div>
      <!-- scoped-slot -->
      <SlotDemo>
      <template v-slot:default="slotProps">
      {{ slotProps.user1.title }}
      </template>
  </SlotDemo>
      <hr>
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