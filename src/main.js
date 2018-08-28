import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";
import "popper.js";
import "masonry";
import "imagesloaded";
//https://www.npmjs.com/package/vue-awesome-swiper

//https://www.npmjs.com/package/vue-responsive
import responsive from "vue-responsive";
Vue.use(responsive);

// import AtComponents from 'at-ui'
// import 'at-ui-style'    // Import CSS
// Vue.use(AtComponents)

//https://console.firebase.google.com/
import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyARbgUiJHCXzACcE3eUb8EIXYzNCdLrQ5U",
  authDomain: "ark-cg.firebaseapp.com",
  databaseURL: "https://ark-cg.firebaseio.com",
  projectId: "ark-cg",
  storageBucket: "ark-cg.appspot.com",
  messagingSenderId: "987515047211"
};
firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
