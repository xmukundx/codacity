/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./custom.css",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-navbar': 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [],
};
