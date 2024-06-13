import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import Inner from './components/Inner'
import Inner2 from './components/Inner2'
import Inner3 from './components/Inner3'
import Inner4 from './components/Inner4'
import InnerBlank from './components/InnerBlank'
import InnerBlank2 from './components/InnerBlank2'
import Main from './components/Main'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/inner', component: Inner },
  { path: '/inner2', component: Inner2 },
  { path: '/inner3', component: Inner3 },
  { path: '/inner4', component: Inner4 },
  { path: '/innerblank', component: InnerBlank },
  { path: '/innerblank2', component: InnerBlank2 },
  { path: '/main', component: Main },
  { path: '/*', component: Main }
];

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
