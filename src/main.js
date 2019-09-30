import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Global components
import Pagination from './components/Pagination.vue';

Vue.component('pagination', Pagination);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
