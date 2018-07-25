import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import store from './store'
import App from './App.vue'

import GalleryScreen from './components/GalleryScreen'
import UploadScreen from './components/UploadScreen'
import AuthHandler from './components/AuthHandler'

Vue.config.productionTip = false

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: UploadScreen },
    { path: '/galleries', component: GalleryScreen },
    { path: '/oauth2/callback', component: AuthHandler, },
  ],
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
