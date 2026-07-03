import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://lefomo.cc",
  trailingSlash: "always",
  output: "static",
  adapter: cloudflare(),

  integrations: [tailwind()],
});
