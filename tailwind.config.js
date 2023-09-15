/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "Bree": ["Bree Serif", "serif"],
      "Ibm": ["IBM Plex Serif", "serif"]
    }
  },
  plugins: [],
}

