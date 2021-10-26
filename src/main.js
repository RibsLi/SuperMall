import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";

import FastClick from "fastclick";
// import toast from  "components/common/toast/index"

// 解决移动端300ms延迟
FastClick.attach(document.body);

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
