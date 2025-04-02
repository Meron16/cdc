/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'bit-blue': '#1e3a8a', // Royal blue color from the logo
        'bit-yellow': '#fbbf24', // Golden yellow color from the logo
      },
    },
  },
  plugins: [],
}