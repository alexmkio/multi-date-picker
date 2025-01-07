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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        action: "hsl( 320, 54%, 52%, 1)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
