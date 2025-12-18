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
        data: true,     // ← Required: minimal client data
        paths: false,   // ← Disabled: removes route mappings (the biggest bloat)
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
        },
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