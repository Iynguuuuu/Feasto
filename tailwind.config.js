/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E52D3C",
        text1: "#1F2937",
        text2: "#6B7280",
        text3: "#4B5563",
        green: "#D1FAE5",
        yellow: "#FEF3C7",
        red: "#FEF2F2"
      },


    },
  },
  plugins: [],
}