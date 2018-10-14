import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js';
import 'masonry';
import 'imagesloaded';
//https://www.npmjs.com/package/vue-awesome-swiper

//https://www.npmjs.com/package/vue-responsive
import responsive from 'vue-responsive';
Vue.use(responsive);

import { VueMasonryPlugin } from 'vue-masonry';
Vue.use(VueMasonryPlugin);

//https://github.com/surmon-china/vue-awesome-swiper
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
