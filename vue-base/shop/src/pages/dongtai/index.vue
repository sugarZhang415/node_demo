<template>
  <div>
      <hr>
    <div v-for="(item) in list" :key="item.id">
        <!-- 标签必须是component，写一个:is,后面是要渲染的组件名 -->
      <component :is="item.val" />
    </div>
  </div>
</template>

<script>
import Text from "./components/text";
import Img from "./components/img";
export default {
  compontents: {
    Text,
    Img
  },
  data() {
    return {
      list: [
        {
          id: 1,
          val: Text // 此处需要与所渲染的组件名一致
        },
        {
          id: 2,
          val: Img
        },
        {
          id: 3,
          val: Text
        }
      ]
    };
  }
};
</script>

<style>
</style>