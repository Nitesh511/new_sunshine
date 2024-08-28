/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        subheading: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    colors: {
        customColorRgb: 'rgb(240, 123, 47)', // Example using RGB
      },
    },
  },
  plugins: [],
};
