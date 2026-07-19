import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          50: "#eef5fb",
          100: "#d6e7f5",
          200: "#a9cbe8",
          300: "#75a9d8",
          400: "#3f80c0",
          500: "#1f5f9e",
          600: "#144a80",
          700: "#0f3a66",
          800: "#0b2c4e",
          900: "#082036",
          950: "#04121f",
        },
        sky: {
          50: "#eafbff",
          100: "#cdf3ff",
          200: "#9fe8ff",
          300: "#5fd8ff",
          400: "#29c4f5",
          500: "#0fabe0",
          600: "#0787b8",
          700: "#086b93",
          800: "#0c5878",
          900: "#0f4a64",
        },
        primary: {
          DEFAULT: "#0b2c4e",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#29c4f5",
          foreground: "#0b2c4e",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11,44,78,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
