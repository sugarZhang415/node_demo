<template>
  <div>
    <ul ref="list1">
      <div v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </ul>

    <button @click="handle">添加选项</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["a", "b", "c"]
    };
  },
  methods: {
    handle() {
      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);

      // 1.因为是异步渲染，此时拿到的dom是修改之前的，$nextTick是等待dom渲染完之后再回调
      // 2.页面渲染时，会将data修改做整合，多次data修改只会渲染一次。


      // const list1 = this.$refs.list1;
      // console.log(list1.childNodes.length);
      this.$nextTick(() => {
        const list1 = this.$refs.list1;
        console.log(list1.childNodes.length);
      });
    }
  }
};
</script>

<style>
</style>