/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#F97316', // orange-500
          600: '#EA580C', // orange-600
          800: '#9A3412', // orange-800
        },
        secondary: {
          800: '#991B1B', // red-800
        },
        neutral: {
          100: '#F3F4F6', // gray-100
          200: '#E5E7EB', // gray-200
          300: '#D1D5DB', // gray-300
          600: '#4B5563', // gray-600
          700: '#374151', // gray-700
          800: '#1F2937', // gray-800
          900: '#111827', // gray-900
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}