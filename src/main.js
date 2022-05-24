import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";
import "./assets/css/main.css";

import { createSSRApp } from "vue";

createSSRApp(App).mount("#app");

// const app = createSSRApp({
//   data: () => app.mount("#app"),
// });

// renderToString(
//   app.then((html) => {
//     console.log(html);
//   })
// );
