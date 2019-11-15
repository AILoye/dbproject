import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import "@common/components"
import VueTouch from 'vue-touch'
　
// import address from 'address'

Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});

new Vue({
  router,
  store,
  // address,
  render: h => h(App)
}).$mount('#app')
