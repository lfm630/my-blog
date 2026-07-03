import { defineCollection, z } from "astro:content";

// 定义博客文章的内容模型
const blogCollection = defineCollection({
  type: "content", // 内容来自 src/content/blog/ 下的 .md 文件
  schema: z.object({
    title: z.string(),                          // 文章标题
    description: z.string(),                    // 文章摘要（SEO + 列表展示）
    date: z.coerce.date(),                      // 发布日期（自动从字符串转为 Date）
    tags: z.array(z.string()).default([]),      // 标签（可选，默认空数组）
    draft: z.boolean().default(false),          // 草稿标记（true 则不会出现在列表中）
  }),
});

// 导出集合，key 名必须和文件目录名一致
export const collections = {
  blog: blogCollection,
};
