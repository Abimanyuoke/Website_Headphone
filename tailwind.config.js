/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#aa6d6b",
        brandDark: "#151616",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
      container: {
        padding: {
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "6rwm"
        }
      }
    },
  },
  plugins: [],
}
