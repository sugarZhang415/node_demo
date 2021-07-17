<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.value }}
        <button @click="del(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from "./event.js";

export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    del(id) {
      this.$emit("delete", id);
    },
    addTitleHandle(val) {// 自定义事件
      console.log("添加的item：" + val);
    }
  },
  mounted() {
    // event就是vue实例，vue自己支持自定义事件
    event.$on("onAddTitle", this.addTitleHandle); //定义自定义事件
  },
  beforeDestory() {
    //自定义事件需要及时解绑，避免内存泄漏
    event.$off("onAddTitle", this.addTitleHandle);
  }
};
</script>

<style>
</style>