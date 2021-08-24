import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import ViewUI from 'view-design'
import i18n,{trans} from "./i18n";
// window.Vue = Vue
Vue.use(ViewUI);
Vue.config.productionTip = false
// Vue.use(i18n);


Vue.prototype.STATICBASEURI = process.env.VUE_APP_STATICURI
Vue.prototype.DOMAIN = process.env.VUE_APP_DOMAIN
Vue.prototype.$api = api
Vue.prototype.$trans =trans

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
