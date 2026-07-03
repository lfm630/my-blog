import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // 部署到 GitHub Pages 时修改下面两项：
  // 类型一：仓库名是 <你的用户名>.github.io → site: "https://<用户名>.github.io"，base 不设
  // 类型二：仓库名不是用户名的项目站点 → site: "https://<用户名>.github.io/<仓库名>"
  //         需要 base: "/<仓库名>"（例如 base: "/my-blog"）
  site: "https://your-username.github.io",

  // 默认不设 base（适用于 <用户名>.github.io 仓库）
  // 如果不是用户名仓库，取消下面这行的注释并改成你的仓库名：
  // base: "/my-blog",

  integrations: [tailwind()],
});
