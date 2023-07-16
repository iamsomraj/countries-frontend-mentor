/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': 'hsl(209, 23%, 22%)',
        'dark-primary-bg': 'hsl(207, 26%, 17%)',
        'light-text': 'hsl(200, 15%, 8%)',
        'light-input': 'hsl(0, 0%, 52%)',
        'light-primary-bg': 'hsl(0, 0%, 98%)',
        'light-primary': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
