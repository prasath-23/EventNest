/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {

      colors: {
        // primary: "#19191B",
        primary: "#FEFBF3",
        secondary: "#9EDDFF",
        // textColor: "rgba(255, 255, 255, 0.7)",
        textColor: "#4d2c29",
        headColor: "#181D31",
        highlight: "#800000" ,
        lightRed: "#fbf0d0" ,

      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    // fontSize: {
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    // }
  },
  // variants: {
  //   extend: {
  //     // ...
  //    fontSize: ['hover', 'focus'],
  //   }
  // },
  plugins: [],
};
