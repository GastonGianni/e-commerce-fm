/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "10px",
      xs: "408px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit,minmax(250px,1fr))",
      },
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "orange-personal": "hsl(26,100%,55%)",
        "pale-orange": "hsl(25,100%,94%)",
        "very-dark-blue": "hsl(220,13%,13%)",
        "dark-grayish": "hsl(219,19%,45%)",
        "grayish-blue": "hsl(220,14%,75%)",
        "light-grayish-blue": "hsl(223,64%,98%)",
        "black-75": "hsl(0,0%,0%)",
      },
    },
  },
  plugins: [],
};
