import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greycolor:'background: linear-gradient(101.13deg, #FFFFFF 24.57%, rgba(16, 13, 49, 0) 74.19%)',
        white80:'#FFFFFFCC',
        customGray:'#454545',
        white70:"#FFFFFFB2",
        darkBlue:"#0A081F"
      },
    },
  },
  plugins: [],
} satisfies Config;
