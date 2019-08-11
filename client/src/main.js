import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;

import config from './config';

Vue.prototype.$http = axios.create({
  baseURL: `${config.ssl ? 'https://' : 'http://'}${config.apiDomain}`,
  json: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
