import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
const REPO_BASE = "/my-blog";

export default defineConfig({
  site: "https://lfm630.github.io",
  base: REPO_BASE,
  trailingSlash: "always",
  output: "static",
  integrations: [tailwind()],
});
