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
      this.$emit('delete',id);
    }
  }
};
</script>

<style>
</style>