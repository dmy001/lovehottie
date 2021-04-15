import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import ViewUI from 'view-design'

Vue.use(ViewUI);
Vue.config.productionTip = false

Vue.prototype.STATICBASEURI = process.env.VUE_APP_STATICURI
Vue.prototype.DOMAIN = process.env.VUE_APP_DOMAIN
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
