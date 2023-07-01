/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      screens: {
        md2: { min: "769px", max: "940px" },
        sm2: { min: "0px", max: "639px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "sunny-day-blue": "#D7DEEC",
        "sunny-day-red": "#F1EBEB",
      },
      border: {
        "sunny-day-border": "6px solid #FFFFFF",
      },
      spacing: {
        44: "44px",
      },
      breakpoints: {
        md2: "940px",
      },
    },
  },
  plugins: [],
};
