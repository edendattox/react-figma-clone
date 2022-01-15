module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
      xl: 900,
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      small: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      xs: "16px",
      xsx: "18px",
      sm: "22px",
      tiny: "20px",
      base: "36px",
      lg: "64px",
    },
    fontFamily: {
      abel: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", " sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
