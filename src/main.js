import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import NavBar from './components/shared/NavBar.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {routes} from './routes.js'

const router = new VueRouter({
  routes:routes
});
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-navbar', NavBar);


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
