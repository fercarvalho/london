import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    // Auto-detect system preference if no saved preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group border-brand-blue/30 overflow-hidden relative"
        title={theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro'}
      >
        <div className={`absolute inset-0 transition-transform duration-500 flex flex-col items-center justify-start ${theme === 'light' ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <Sun className="w-5 h-5 text-brand-blue" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <Moon className="w-5 h-5 text-brand-blue" />
          </div>
        </div>
      </button>
    </div>
  );
};
