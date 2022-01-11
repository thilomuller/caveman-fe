import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import '/src/assets/dark.css';
import router from './router'

import store from './store';
import axios from 'axios';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers = {
  'Authorization': 'Bearer ' + store.getters.StateToken
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
