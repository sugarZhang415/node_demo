<template>
  <div>
      stateA
  </div>
</template>

<script>
export default {
    mounted(){
        console.log('mounted B')
    },
    destroyed(){
        console.log('destory B')
    }
}
</script>

<style>

</style>