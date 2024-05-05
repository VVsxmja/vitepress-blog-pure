// uno.config.ts
import { defineConfig, presetIcons, presetWebFonts, presetWind } from "unocss";

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
