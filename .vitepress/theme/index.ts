// https://vitepress.dev/guide/custom-theme
import Layout from "./components/Layout.vue";
import "virtual:uno.css";
import "@unocss/reset/normalize.css";
import "./style/style.css";

export default {
  Layout,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
