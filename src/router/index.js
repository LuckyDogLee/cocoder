import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import News from '../pages/News.vue'
import NotFound from '../pages/NotFound.vue'

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/news/:type', component: News },
    { path: '/', redirect: '/news/document' },
    { path: '/news', redirect: '/news/document' },
    { path: '*', component: NotFound }
  ]
});