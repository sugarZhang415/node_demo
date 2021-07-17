<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        :default-active="this.$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="navMenu in NavList">
          <el-menu-item
            v-if="!navMenu.children"
            :key="navMenu.path"
            @click="goTo('/vuex')"
            :index="navMenu.path"
          >
            <span slot="title">{{navMenu.title}}</span>
          </el-menu-item>
          <el-submenu
            v-if="navMenu.children"
            :key="navMenu.path"
            @click="goTo(navMenu.path)"
            :index="navMenu.path"
          >
            <template slot="title">
              <span slot="title">{{navMenu.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                @click="goTo(`${navMenu.path}/${item.path}`)"
                v-for="item in navMenu.children"
                :key="item.path"
                :index="navMenu.path+'/'+item.path" 
              >{{item.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>

<script>
import { routes } from "./router.js";
export default {
  data() {
    return {
      NavList: routes
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped>
.el-col-12 {
  width: 27%;
}
</style>