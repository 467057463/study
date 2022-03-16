import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App";
import Loading from "./components/base/Loading";

const app = createApp(App);
app.use(ElementPlus);
app.component("loading", Loading);
app.mount("#app");
