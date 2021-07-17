<template>
  <div>
    <input class="input" v-model="val" />
    <button @click="handle">提交</button>
  </div>
</template>

<script>
import event from "./event.js";

export default {
  data() {
    return {
      val: ""
    };
  },
  methods: {
    handle() {
      // 调用父组件事件
      this.$emit("add", this.val); // add是父组件要触发的事件，名称定义在父组件

      // 调用自定义事件（兄弟组件通信）
      event.$emit("onAddTitle", this.val);

      this.val = "";
    }
  }
};
</script>

<style scoped>
.input {
  margin: 23px;
}
</style>