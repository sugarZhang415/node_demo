<template>
  <div>
        <p>输入框：{{name}}</p>
        <input type='text' v-model.trim="name">
        <!-- 去除空格 -->
        <input type='text' v-model.lazy="name">
        <!-- 防抖效果 -->
        <input type='text' v-model.number="age">
        <!-- 转化数字 -->
        <p>多行文本：{{desc}}</p>
        <textarea v-model.trim="desc"></textarea>
        <!-- 不能写成  <textarea>{desc{}}</textarea>-->
        <p>复选框：{{checked}}</p>
        <input type='checkbox' v-model.trim="checked">
        <p>多个复选框：{{checkedNames}}</p>
        <input type='checkbox' id='jack' value='Jack' v-model.trim="checkedNames">
        <input type='checkbox' id='tim' value='Tim' v-model.trim="checkedNames">
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'',
            age:0,
            desc:'',
            checked:false,
            checkedNames:["Jack"]
        }
    }
}
</script>

<style>

</style>