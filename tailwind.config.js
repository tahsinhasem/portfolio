/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        "abnes" : ["Abnes", "sans-serif"],
        "montserrat" : ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

