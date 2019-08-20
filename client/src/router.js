import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Base from "./views/Base.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      component: Base,
      children: [
        {
          path: "",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "view-home" */ `@/views/Home.vue`)
        },
        {
          path: "about",
          name: "about",
          component: () =>
            import(/* webpackChunkName: "view-about" */ `@/views/About.vue`)
        },
        {
          path: "applications",
          name: "applications",
          component: () =>
            import(
              /* webpackChunkName: "view-about" */ `@/views/Applications.vue`
            )
        },
        {
          path: "applications/:listing",
          name: "job-listing",
          component: () =>
            import(
              /* webpackChunkName: "view-about" */ `@/views/JobListing.vue`
            )
        },
        {
          path: "news",
          name: "news",
          component: () =>
            import(/* webpackChunkName: "view-news" */ `@/views/News.vue`)
        },
        {
          path: "news/:url",
          name: "news-article",
          component: () =>
            import(
              /* webpackChunkName: "view-news" */ `@/views/NewsArticle.vue`
            )
        },
        {
          path: "teams",
          name: "teams",
          component: () =>
            import(/* webpackChunkName: "view-teams" */ `@/views/Teams.vue`)
        },
        {
          path: "teams/:team",
          name: "team",
          component: () =>
            import(/* webpackChunkName: "view-teams" */ `@/views/Team.vue`)
        },
        {
          path: "streamers",
          name: "streams",
          component: () =>
            import(/* webpackChunkName: "view-streams" */ `@/views/Streamers.vue`)
        },
        {
          path: "streamers/:stream",
          name: "stream",
          component: () =>
            import(/* webpackChunkName: "view-streams" */ `@/views/Streamer.vue`)
        },
        {
          path: "sponsors",
          name: "sponsors",
          component: () =>
            import(
              /* webpackChunkName: "view-sponsors" */ `@/views/Sponsors.vue`
            )
        }
      ]
    },
    {
      path: "/manage",
      component: () =>
        import(/* webpackChunkName: "view-manage" */ `@/views/admin/Base.vue`),
      children: [
        {
          path: "",
          name: "manage-home",
          component: () =>
            import(
              /* webpackChunkName: "view-manage-home" */ `@/views/admin/Home.vue`
            )
        },
        {
          path: "news",
          name: "manage-news",
          component: () =>
            import(
              /* webpackChunkName: "view-manage-news" */ `@/views/admin/News.vue`
            )
        },
        {
          path: "edit",
          name: "edit",
          component: () =>
            import(
              /* webpackChunkName: "view-edit" */ `@/views/admin/Editor.vue`
            )
        },
        {
          path: "streamers",
          name: "manage-streamers",
          component: () =>
            import(
              /* webpackChunkName: "view-manage-streamers" */ `@/views/admin/Streamers.vue`
            )
        },
        {
          path: "teams",
          name: "manage-teams",
          component: () =>
            import(
              /* webpackChunkName: "view-manage-teams" */ `@/views/admin/Teams.vue`
            )
        }
      ]
    }
  ]
});
