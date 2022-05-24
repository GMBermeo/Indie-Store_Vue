import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";
import "./assets/css/main.css";

import { createSSRApp } from "vue";

import { renderToString } from "vue/server-renderer";

const app = createSSRApp({
  data: () => createApp(App).mount("#app"),
});

renderToString(
  app.then((html) => {
    console.log(html);
  })
);
