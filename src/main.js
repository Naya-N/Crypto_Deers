import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store';

import VueMeta from 'vue-meta';
Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
