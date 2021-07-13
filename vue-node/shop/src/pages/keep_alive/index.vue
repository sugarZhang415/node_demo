<template>
  <div>
    <div>
      普通切换：
      <!-- 渲染时触发mounted，被切换掉的时候触发destroyed -->
      <button @click="handle('A')">A</button>
      <button @click="handle('B')">B</button>
      <button @click="handle('C')">C</button>
    </div>
    <ComponentA v-if="state === 'A'" />
    <ComponentB v-if="state === 'B'" />
    <ComponentC v-if="state === 'C'" />
    <hr />
    <div>
      keep-alive切换：
      <button @click="handle2('a')">A</button>
      <button @click="handle2('b')">B</button>
      <button @click="handle2('c')">C</button>
    </div>
    <keep-alive>
        <!-- 加上keep-alive，组件A，b,c在初次渲染的时候触发mounted，但切换点时不会被销毁  -->
      <ComponentA v-if="state2 === 'a'" />
      <ComponentB v-if="state2 === 'b'" />
      <ComponentC v-if="state2 === 'c'" />
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from "./componentA.vue";
import ComponentB from "./componentB.vue";
import ComponentC from "./componentC.vue";

export default {
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  },
  data() {
    return {
      state: "A",
      state2: "a"
    };
  },
  methods: {
    handle(val) {
      this.state = val;
    },
    handle2(val) {
      this.state2 = val;
    }
  }
};
</script>

<style>
</style>