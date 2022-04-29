import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";
import "./assets/css/main.css";
import "../src/modules/rellax.min.js";

createApp(App).mount("#app");

var rellax = new Rellax(".rellax", {
  // center: true
  callback: function (position) {
    // callback every position change
    // console.log(position);
  },
  breakpoints: [576, 768, 1024],
});
