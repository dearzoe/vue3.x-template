import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Antd from "ant-design-vue";//如果打开全局引入需要修改babel 配置
import { Button, Input, Layout, Icon, Drawer, Radio, Menu } from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

Vue.use(Button);
Vue.use(Input);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);

Vue.config.productionTip = false;

// Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
