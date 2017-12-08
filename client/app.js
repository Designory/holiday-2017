import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import api from './rest'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
