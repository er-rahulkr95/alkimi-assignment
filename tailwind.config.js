const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'aboutUs':"url('/bg-aboutus.png')",
          'banner': "url('/bannerimg.png')"
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
