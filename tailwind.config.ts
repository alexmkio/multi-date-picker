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
        "pale-blue": "#EEEEFF",
        "very-pale-blue": "#ebf6ff",
        "desaturated-red": "#c78f9b",
        "light-grayish-blue": "#f6f8fc",
        "very-light-gray": "#EEEEEE",
        "very-light-gray-2": "#d9d9d9",
        "light-gray": "#B2B2B2",
        "light-gray-2": "#E4E4E4",
        "dark-gray": "#565656",
        "moderate-pink": "#C7449B",
        "soft-pink": "#E35982",
        "soft-red": "#ed747b",
        "lime-green": "#38CB8D",
        cyan: "#00ff94",
      },
    },
  },
  plugins: [],
} satisfies Config;
