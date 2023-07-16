/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'dark-mode-elements': 'hsl(209, 23%, 22%)',
      'dark-mode-background': 'hsl(207, 26%, 17%)',
      'light-mode-text': 'hsl(200, 15%, 8%)',
      'light-mode-input': 'hsl(0, 0%, 52%)',
      'light-mode-background': 'hsl(0, 0%, 98%)',
      'dark-mode-text': 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
};
