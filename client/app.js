import Vue from 'vue'
import App from './components/App'
import router from './router'
import store from './store'
import api from './scripts/rest'

import './scripts/history-travel'
import './scripts/gestures'
import './scripts/shake'
import './scripts/screen'

// Google analytics object
window.dataLayer = [];

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
