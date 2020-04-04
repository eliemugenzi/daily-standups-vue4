import Vue from 'vue'
import App from './App.vue';
import Buefy from 'buefy';
import VueCompositionAPI from '@vue/composition-api';

import 'buefy/dist/buefy.css'
import store from './store'

Vue.use(Buefy);
Vue.use(VueCompositionAPI);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
