import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import NotFound from "./views/404";
import "nprogress/nprogress.css";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      hideInMenu: true,
      // component: {render: h => h('router-view')},
      component: () =>
        import(/* webpackChunkName: "layout" */ "./Layouts/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./Layouts/BasicLayout"),
      children: [
        // dashboard
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页" },
              component: () =>
                import(/* webpackChunkName: "user" */ "./views/Dashboard/Analysis")
            }
          ]
        },
        // form
        {
          path: "/form",
          name: "form",
          meta: { icon: "form", title: "表单" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/form/basic-form",
              name: "basicform",
              meta: { title: "基本表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/Basicform")
            },
            {
              path: "/form/step-form",
              name: "stepform",
              meta: { title: "分步表单" },
              hideChildrenInMenu: true,
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/Stepform"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/Stepform/Step1")
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/Stepform/Step2")
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/Stepform/Step3")
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
