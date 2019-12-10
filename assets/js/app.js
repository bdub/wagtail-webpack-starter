import Vue from 'vue';

Vue.config.productionTip = false;

import App from './App.vue';

export default () => {
    /* eslint-disable no-new */
    new Vue({
      el: "#app",
      render: h => h(App)
    });
};
