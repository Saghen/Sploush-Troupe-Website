import Vue from 'vue'
import Router from "vue-router";
import PrimaryView from "./Primary-View.vue";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      component: PrimaryView,
      meta: {
        title: "Eric Dyer - Portfolio"
      },
      children: [
        {
          path: "/",
          name: "home",
          component: loadView('Home')
        },
        {
          path: "/about",
          name: "about",
          component: loadView("About")
        },
        {
          path: "/news",
          name: "news",
          component: loadView("News")
        },
        {
          path: "/news/:title",
          name: "news-article",
          component: loadView("News-Article")
        },
        {
          path: "/teams",
          name: "teams",
          component: loadView("Teams")
        },
        {
          path: "/teams/:team",
          name: "team",
          component: loadView("Team")
        },
        {
          path: "/streamers",
          name: "streams",
          component: loadView("Streams")
        },
        {
          path: "/streamers/:stream",
          name: "stream",
          component: loadView("Stream")
        },
        {
          path: "/sponsors",
          name: "sponsors",
          component: loadView("Sponsors")
        }
      ]
    }
  ]
});
