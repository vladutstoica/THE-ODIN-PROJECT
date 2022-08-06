/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-background': '#1A2A32',
        'custom-button': '#1F3540',
        'custom-1': '#F2B237',
        'custom-2': '#30C4BE',
        'custom-3': '#A8BEC9',

      },
    },
  },
  plugins: [],
}
