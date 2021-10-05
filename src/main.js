import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import WaveUI from "wave-ui/src/wave-ui";
import "material-design-icons/iconfont/material-icons.css";

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(store);
app.use(router);
// app.use(VueAxios, axios);
new WaveUI(app, { iconsLigature: "material-icons" });
app.mount("#app");
