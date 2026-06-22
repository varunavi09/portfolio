/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050816',
        'dark-secondary': '#10172A',
        'secondary-bg': '#10172A',
        'accent': '#5EEAD4',
        'text-primary': '#F8FAFC',
        'text-secondary': '#A5B4FC',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'aurora': 'aurora 12s ease-in-out infinite alternate',
        'scan': 'scan 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(94, 234, 212, 0.3)' },
          '50%': { boxShadow: '0 0 26px rgba(192, 132, 252, 0.55)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        aurora: {
          '0%': { transform: 'translate3d(-4%, -2%, 0) rotate(-6deg) scale(1)' },
          '100%': { transform: 'translate3d(4%, 3%, 0) rotate(6deg) scale(1.08)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
