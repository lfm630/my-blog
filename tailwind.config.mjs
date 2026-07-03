/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // 可以在这里扩展主题色、字体等
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          700: "#1d4ed8",
          900: "#1e3a5f",
        },
      },
    },
  },
  plugins: [],
};
