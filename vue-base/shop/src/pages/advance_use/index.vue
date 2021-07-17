<template>
  <div>
      <hr>
      <!-- 自定义v-model -->
      <p>{{name}}</p>
      <CustomVModel v-model='name'/>
  </div>
</template>

<script>
import CustomVModel from './CustomVModel'
export default {
    components: {
        CustomVModel
    },
    data() {
        return {
            name:'五十里'
        }
    }
}
</script>

<style>

</style>