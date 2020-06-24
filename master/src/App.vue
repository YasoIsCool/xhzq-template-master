<!--
 * @Descripttion: 文件说明
 * @version: 0.0.1
 * @Author: gaojiapeng
 * @Date: 2020-06-23 10:21:00
 * @LastEditors: gaojiapeng
 * @LastEditTime: 2020-06-24 14:49:25
-->
<template>
  <div id="root" class="main-container">
    <!-- 登陆后视图 -->
    <template v-if="hasToken">
      <!-- 左侧菜单区 -->
      <the-menu class="main-menu-box" />
      <!-- 右侧视图 -->
      <div class="main-container-content">
        <!-- 上部导航区 -->
        <the-nav />
        <!-- 子应用渲染区 -->
        <div class="main-container-view">
          <el-scrollbar class="content-scroll">
            <!-- qiankun2.0  container 模式-->
            <div id="subapp-viewport" class="app-view-box"></div>
            <!-- qiankun1.0  render 模式-->
            <!-- <div v-html="appContent" class="app-view-box"></div> -->
            <!-- <div v-if="loading" class="subapp-loading"></div> -->
          </el-scrollbar>
        </div>
      </div>
    </template>
    <!-- 非登录视图 -->
    <div v-else id="subapp-viewport" class="app-view-box">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheMenu from "@/components/TheMenu.vue";
import TheNav from "@/components/TheNav.vue";

/**
 * @name 验证登陆身份并启动微应用
 */
import microAppStart from "@/core/auth";

export default {
  name: "rootView",
  components: {
    TheMenu,
    TheNav
  },
  props: {
    loading: Boolean,
    appContent: String
  },
  computed: {
    hasToken() {
      const token = this.$store.getters.token;
      document.title = token;
      const flag = !!token;
      if (flag) {
        microAppStart();
      }
      return flag;
    }
  }
};
</script>

<style lang="scss">
$main_base_color: #f2f3f3;
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.main-container-content {
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  > .main-container-view {
    width: 100%;
    height: calc(100% - 60px);
    background: $main-base-color;
    box-sizing: border-box;
    > .content-scroll {
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: 4px;
      .el-scrollbar__wrap {
        overflow-x: hidden;
        .el-scrollbar__view {
          height: 100%;
        }
      }
    }

    .app-view-box {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
.subapp-loading {
  background: url("~@/assets/images/loading.gif");
}
</style>
