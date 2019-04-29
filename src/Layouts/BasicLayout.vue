<template>
  <div>
    <a-layout
      :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]"
      id="components-layout-demo-custom-trigger"
      style="min-height:100vh;"
    >
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        collapsible
        v-model="collapsed"
        width="256px"
      >
        <div class="logo">这里是LOGO</div>
        <SiderMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align:center;">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";

export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  }
};
</script>

<style lang="less" scoped>
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark{
  .logo{
    color: #fff;
  }
}

.nav-theme-light{
  .logo{
    color: #000;
  }
}
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;

  &:hover {
    background: #eee;
  }
}
</style>
