/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        icon: {
          primary: "#a87700",
        },
        background: {
          primary: "#b9ae94",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {},
};
