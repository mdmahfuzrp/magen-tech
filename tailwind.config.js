/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        special: '#ff5c00',
        primary: '#222',
        secondary: '#333333',
        opacity: '#666666',
      },
      boxShadow: {
        basic: '0 0 4px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

