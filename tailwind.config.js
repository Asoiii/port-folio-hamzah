/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#0ea5e9",
        dark: "#020617",
        secondary: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    variants: {},
    plugins: [],
  },
  plugins: [],
};
