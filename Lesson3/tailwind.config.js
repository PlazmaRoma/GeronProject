/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  purge: {
    safelist: ["max-w-80", "max-h-70", "bg-blue-400", "bg-gray-800", "px-4", "bg-lime-100", "max-w-80", "mx-auto", "p-4", "mt-4", "rounded-lg", /^text-/],
    blocklist: [],
    keyframes: true,
    fontFace: true,
  },
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Exo 2"', "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
});

/* Card, CardHeader, CardBody, CardFooter, Typography, Tooltip  */
