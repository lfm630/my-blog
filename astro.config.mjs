import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://lfm630.github.io",
  base: "/my-blog",
  integrations: [tailwind()],
});
