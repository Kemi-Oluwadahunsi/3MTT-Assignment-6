/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/Rectangle-36.png')",
      },
    },
  },
  plugins: [],
};

