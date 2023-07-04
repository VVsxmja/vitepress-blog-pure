import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Blog Pure",
  vite: {
    plugins: [UnoCSS()],
  },
  appearance: true,
  lastUpdated: true,
  markdown: {
    theme: "github-light",
    // lineNumbers: true,
  },
});
