/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // 暗色主题色板 — 克制、高级、科技感
        surface: {
          DEFAULT: "#0a0a0f",   // 页面背景
          card: "#111118",      // 卡片背景
          hover: "#181825",     // hover 状态
          border: "#1e1e2e",   // 边框
        },
        accent: {
          DEFAULT: "#64ffda",  // 青绿色主强调
          dim: "#3d8e7a",      // 暗淡版
          glow: "#64ffda33",   // glow 效果
        },
        text: {
          primary: "#e0e0e8",
          secondary: "#8888a0",
          muted: "#555570",
        },
        // 保留旧的 primary 以便兼容
        primary: {
          50: "#0a0a0f",
          500: "#64ffda",
          700: "#3d8e7a",
          900: "#111118",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Cascadia Code'", "'Fira Code'", "Consolas", "monospace"],
        sans: ["'Inter'", "'SF Pro Display'", "-apple-system", "sans-serif"],
      },
      animation: {
        "scanline": "scanline 8s linear infinite",
        "flicker": "flicker 0.15s infinite alternate",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(4px)" },
        },
        flicker: {
          "0%": { opacity: "0.97" },
          "100%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 4px #64ffda22, 0 0 8px #64ffda11" },
          "50%": { boxShadow: "0 0 8px #64ffda44, 0 0 16px #64ffda22" },
        },
      },
    },
  },
  plugins: [],
};
