import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

import config from "./config";

Vue.prototype.$http = axios.create({
  baseURL: `${config.api.ssl ? "https://" : "http://"}${config.api.domain}`,
  json: true
});

Vue.prototype.$http.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

// Modal
import VModal from "vue-js-modal";
Vue.use(VModal);

// Toast
import Toasted from "vue-toasted";

Vue.use(Toasted);
Vue.prototype.$sendToast = function(text, opts) {
  const defaultOpts = {
    type: "success",
    duration: 4000
  };

  if (typeof opts !== "object") opts = {};

  opts = {
    ...defaultOpts,
    ...opts
  };

  this.$toasted.show(text, opts);
};

Vue.prototype.$sendToastError = function(text, opts) {
  if (typeof opts !== "object") opts = {};

  opts.type = "error";
  opts.duration = 10000;

  this.$sendToast(text, opts);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
