import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$c = require('collect.js');
new Vue({
  render: h => h(App),
}).$mount('#app')
