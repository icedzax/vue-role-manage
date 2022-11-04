import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import "./tailwind.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.use(createMetaManager());
await router.isReady();
app.mount("#app");
