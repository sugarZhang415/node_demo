<template>
  <a :href="url">
    <span>
      <slot :user1="user">
        {{ user.url }}
      </slot>
    </span>
  </a>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      user: {
        url: "http://www.yuque.com",
        title: "语雀"
      }
    };
  }
};
</script>

<style>
</style>