import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import WaveUI from "wave-ui/src/wave-ui";
import "@mdi/font/css/materialdesignicons.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
require("dotenv").config();
app.use(store);
app.use(router);
app.use(VueAxios, axios);
new WaveUI(app, {
	colors: {
		primary: "#9ac332",
		secondary: "#5d9a26",
	},
});
app.mount("#app");
