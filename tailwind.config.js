// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'], // make sure this is present
  theme: {
    extend: {
      keyframes: {
        floatBG: {
          '0%': { transform: 'translateY(0px) scale(1.02)' },
          '50%': { transform: 'translateY(-10px) scale(1.03)' },
          '100%': { transform: 'translateY(0px) scale(1.02)' },
        },
      },
      animation: {
        floatBG: 'floatBG 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
