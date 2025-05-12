import { defineConfig } from "vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

const manifest: Partial<ManifestOptions> | false = {
  theme_color: "#b7f0e6",
  background_color: "#2EC6FE",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  orientation: "any",
  display: "standalone",
  lang: "ru-RU",
  name: "our PWA-app",
  short_name: "PWA-app",
  start_url: "/",
  screenshots: [
    {
    src: '/screenshots/desktop.png',
    type: 'image/png',
    sizes: '3718x1648',
    form_factor: "wide"
  },
    {
    src: '/screenshots/mobile.png',
    type: 'image/png',
    sizes: '1170x2532',
    form_factor: "narrow"
  },
]
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{html,css,js,png,svg}"],
      },
      manifest: manifest,
    }),
  ],
});
