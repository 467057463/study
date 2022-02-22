import { createApp } from "vue";
import App from "./App";
import Loading from "./components/base/Loading";

const app = createApp(App);
app.component("loading", Loading);
app.mount("#app");
