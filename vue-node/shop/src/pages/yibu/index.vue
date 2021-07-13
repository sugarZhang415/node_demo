<template>
  <div>
        <FormData v-if='show'></FormData>
        <button @click="handle">加载表单</button>
  </div>
</template>

<script>
export default {
    components:{
        FormData:() =>import('./form.vue')//这样就是按需引入
    },
    data() {
        return {
            show:false
        }
    },
    methods:{
        handle(){
            this.show = true
        }
    }
}
</script>

<style>

</style>