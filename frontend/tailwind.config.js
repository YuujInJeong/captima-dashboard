// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        toss: {
          blue: '#3182f6',
          indigo: '#5461f1',
          purple: '#8c4bf6',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        toss: '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        toss: '14px',
      },
    },
  },
  variants: {},
  plugins: [],
}