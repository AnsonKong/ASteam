import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import mixinObj from './mixin'
import { sync } from 'vuex-router-sync'
import createDirectives from './directive'

export function createApp () {
  const router = createRouter()
  const store = createStore()

  Vue.mixin(mixinObj)

  createDirectives()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
