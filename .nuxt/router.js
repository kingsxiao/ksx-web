import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f3c1da2 = () => interopDefault(import('..\\resource\\pages\\home\\index.vue' /* webpackChunkName: "pages/home/index" */))
const _8cdb5c4c = () => interopDefault(import('..\\resource\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _2e977e7c = () => interopDefault(import('..\\resource\\pages\\user\\register.vue' /* webpackChunkName: "pages/user/register" */))
const _1a91b424 = () => interopDefault(import('..\\resource\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _2f3c1da2,
    name: "home"
  }, {
    path: "/user/login",
    component: _8cdb5c4c,
    name: "user-login"
  }, {
    path: "/user/register",
    component: _2e977e7c,
    name: "user-register"
  }, {
    path: "/",
    component: _1a91b424,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
