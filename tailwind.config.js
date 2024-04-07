/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        mainColor: '#96c9cc',
        hoverMainColor: '#5dc2c8'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px'
      },  
      keyframes: {
        arrowR: {
          '0%,100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        }
      },
      animation: {
        arrowR: 'arrowR 1s ease-in-out infinite',
      }
    },

  },
  plugins: [],
}

