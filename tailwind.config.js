/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight:{
        '20':'5rem'
      },
      minheight:{
        '100':'30rem'
      }
    },
  },
  plugins: [],
}

