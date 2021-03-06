import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/news",
      name: "news",
      component: () => import("./views/News.vue")
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("./views/Gallery.vue")
    },
    {
      path: "/project",
      name: "project",
      component: () => import("./views/Project.vue")
    },
    {
      path: "/member",
      name: "member",
      component: () => import("./views/Member.vue")
    }
    //404対策？
    //https://syon.github.io/refills/rid/1500559/
  ]
});
