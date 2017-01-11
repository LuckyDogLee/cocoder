import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import News from '../pages/News.vue'
import Add from '../pages/Add.vue'
import Detail from '../pages/Detail.vue'
import NotFound from '../pages/NotFound.vue'

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/news/:type', component: News },
    { path: '/news/:type/:id', component: Detail },
    { path: '/add', component: Add },
    { path: '/', redirect: '/news/doc' },
    { path: '/news', redirect: '/news/doc' },
    { path: '*', component: NotFound }
  ]
});