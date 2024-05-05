// https://vitepress.dev/guide/custom-theme
import { Theme } from "vitepress"
import Layout from "./components/Layout.vue";
import "virtual:uno.css";
import "@unocss/reset/normalize.css";
import "./style/style.css";

export const baseTheme = {
  Layout,
}

export default {
  extends: baseTheme,
} satisfies Theme;
