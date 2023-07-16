import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState<string>('');

  const setDarkTheme = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  };

  const removeDarkTheme = () => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
    setTheme('');
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDarkTheme)) {
      setDarkTheme();
    } else {
      removeDarkTheme();
    }
  }, []);

  return { theme, setDarkTheme, removeDarkTheme };
}
