import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#18213D", brand: "#4F46E5", accent: "#EAA234" },
      boxShadow: { glow: "0 24px 70px rgba(79, 70, 229, 0.15)" },
    },
  },
  plugins: [],
};

export default config;
