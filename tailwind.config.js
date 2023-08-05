/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Exo 2"', "sans-serif"],
        base: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "390px",
        xs: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1536px",
        "max-xl": {
          max: "1399px",
        },
        "max-lg": {
          max: "1199px",
        },
        "max-md": {
          max: "991px",
        },
        "max-sm": {
          max: "767px",
        },
        "max-xs": {
          max: "575px",
        },
        print: {
          raw: "print",
        },
      },
      colors: {
        link: "var(--ifm-link-color)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container-slim": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          "@screen max-xs": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen md": {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          "@screen lg": {
            maxWidth: "992px",
          },
          "@screen xl": {
            maxWidth: "1114px",
          },
          "@screen 2xl": {
            maxWidth: "1114px",
          },
        },
      });
    },
  ],
};
