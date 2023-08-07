/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "homepage-banner": "url('/src/assets/main_banner.jpg')",
        "error-illustration": "url('/src/assets/error_illustration.jpg)",
      },
      height: {
        128: "30rem",
      },
      minHeight: {
        "1/2": "600px",
      },
      colors: {
        primary: "#a87700",
      },
      transitionDuration: {
        1500: "1500ms",
      },
    },
    keyframes: {
      animatePhoto: {
        "0%": { transform: "scale(1) ease-in-out" },
        "100%": { transform: "scale(1.2) ease-in-out forward" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {},
};
