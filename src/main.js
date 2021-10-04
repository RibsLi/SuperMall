// import Vue from 'vue'
// import App from './App'
// import router from './router'

// // Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   render: h => h(App),
//   router,
// }).$mount("#app")

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import store from './store'


createApp(App).use(router).mount('#app')
