/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "sunny-day-blue": "#D7DEEC",
        "sunny-day-red": "#F1EBEB",
        // FF0000
        // #F1EBEB
        // , rgba(241, 235, 235, 0.6) 100%)",
        // koft: "rgba",
      },
      border: {
        "sunny-day-border": "6px solid #FFFFFF",
      },
    },
  },
  plugins: [],
};
