import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "view-home" */ `@/views/Home.vue`)
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "view-about" */ `@/views/About.vue`)
    },
    {
      path: "/applications",
      name: "applications",
      component: () =>
        import(/* webpackChunkName: "view-about" */ `@/views/Applications.vue`)
    },
    {
      path: "/applications/:listing",
      name: "job-listing",
      component: () =>
        import(/* webpackChunkName: "view-about" */ `@/views/JobListing.vue`)
    },
    {
      path: "/news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "view-news" */ `@/views/News.vue`)
    },
    {
      path: "/news/:title",
      name: "news-article",
      component: () =>
        import(/* webpackChunkName: "view-news" */ `@/views/NewsArticle.vue`)
    },
    {
      path: "/teams",
      name: "teams",
      component: () =>
        import(/* webpackChunkName: "view-teams" */ `@/views/Teams.vue`)
    },
    {
      path: "/teams/:team",
      name: "team",
      component: () =>
        import(/* webpackChunkName: "view-teams" */ `@/views/Team.vue`)
    },
    {
      path: "/streamers",
      name: "streams",
      component: () =>
        import(/* webpackChunkName: "view-streams" */ `@/views/Streams.vue`)
    },
    {
      path: "/streamers/:stream",
      name: "stream",
      component: () =>
        import(/* webpackChunkName: "view-streams" */ `@/views/Stream.vue`)
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: () =>
        import(/* webpackChunkName: "view-sponsors" */ `@/views/Sponsors.vue`)
    }
  ]
});
