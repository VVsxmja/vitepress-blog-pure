import { DefaultTheme, RawConfigExports, defineConfig } from "vitepress";
import UnoCSS_Vite from "unocss/vite";
import UnoCss_PostCSS from "@unocss/postcss"

export const baseConfig = {
  vite: {
    plugins: [UnoCSS_Vite()],
    css: {
      postcss: {
        plugins: [UnoCss_PostCSS()]
      }
    }
  },
  appearance: true,
  lastUpdated: true,
  markdown: {
    theme: "github-light",
    // lineNumbers: true,
  },
  lang: "zh-CN",
} satisfies RawConfigExports<DefaultTheme.Config>;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress Theme Blog Pure",
  base: "/vitepress-theme-blog-pure/" /* for Github Pages */,
  extends: baseConfig
});
