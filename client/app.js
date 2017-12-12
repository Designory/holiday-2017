import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store'
import api from './scripts/rest'

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
