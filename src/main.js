import Vue from 'vue'
import router from './router'
// import store from './store'
import App from './App.vue'
// import Vuerify from 'vuerify'
//
// Vue.use(Vuerify)
//
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'registeredComplete') {
//     window.sessionStorage.registered = 0
//     next()
//   } else {
//     next()
//   }
//
//   if (to.name !== 'index') {
//     let el = document.documentElement
//     el.style.overflow = 'auto'
//   }
// })


const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
