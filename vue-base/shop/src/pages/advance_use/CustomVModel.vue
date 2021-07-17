<template>
<!-- 例如vue颜色选择器 -->
  <input type='text' :value='text1' @input="$emit('change1',$event.target.value)">
  <!-- 
      1.上面的input使用：value，而没有使用v-model进行双向数据绑定
      2.把上面的@input换成@blur就是在失去焦点时，改变数据
   -->
</template>

<script>
export default {
    model: {
        props: 'text1',// 对应props里的text名字要一样
        event: 'change1',//与上面@input里的change名字对应
    },
    props: {
        text1: String,
        default() {
            return ''
        }
    }
}
</script>

<style>

</style>