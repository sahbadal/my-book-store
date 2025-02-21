import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Yeh sabhi files ko cover karega
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}", // HeroUI ke components ke liye
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
