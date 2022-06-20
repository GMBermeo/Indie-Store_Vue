import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";
import "./assets/css/main.css";
import { renderToString } from "vue/server-renderer";
// import "./modules/rellax.min.js";

import Rellax from "rellax";

import { createSSRApp } from "vue";

createSSRApp(App).mount("#app");

let rellax = new Rellax(".rellax", {
  // center: true,
  callback: function (position) {
    // callback every position change
    // console.log(`Rellax: ${position.y} (x: ${position.x})`);
  },
  breakpoints: [576, 768, 1024],
});

// const app = createSSRApp(App).mount("#app");
App.use(
  "/robots.txt",
  express.static(path.join(__dirname, "dist/static/robots.txt"))
);

async () => {
  const html = await renderToString(createSSRApp(App).mount("#app"));
  console.log(html);
};
