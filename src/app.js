import Vue from 'vue';
import App from './pages/App.vue';
import store from './store';
import router from './router';

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  store,
  ...App
})

// actually mount to DOM
app.$mount('#app')