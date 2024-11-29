/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#11306A",
        "secondaryColor": "#E07539",
        "secondaryColorLight": "#E09E79"
      },
    },
  },
  plugins: [],
};
