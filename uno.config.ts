// uno.config.ts
import { defineConfig, presetIcons, presetWebFonts } from "unocss";
import { presetWind } from "@unocss/preset-wind";

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({ cdn: "https://esm.sh/" }),
    presetWebFonts({
      provider: "google",
      fonts: {
        mono: ["Fira Mono"],
        serif: ["Noto Serif"],
        sans: ["Noto Sans"],
      },
    }),
  ],
});
