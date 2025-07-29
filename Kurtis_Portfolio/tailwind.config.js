/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'periwinkle': '#BEB7DF',
        'periwinkle-500': '#A8A0C8',
        'lavender': '#E5E2F4',
        'black': '#333333',
        'white': '#F5F5F5',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        draw: 'draw 2s ease forwards',
      },
    },
  },
  plugins: [],
};
