import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://anavareethaimassage.de",
  integrations: [
    icon(),
    i18n({
      defaultLocale: "de",
      locales: ["de", "en"],
      client: {
        data: false,    // ← Changed: Removes locale data from HTML
        paths: false,   // ← Changed: Removes route mappings from HTML
      },
      pages: {
        "/about": {
          en: "/about",
        },
        "/massages": {
          en: "/massages",
        },
        "/contact": {
          en: "/contact",
        },
        "/thai-solution-massage": {
          en: "/thai-solution-massage",
        },
        "/impressum": {
          en: "/impressum",
        },
        "/privacy-policy": {
          en: "/privacy-policy",
        }
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
    }),
  ],
});