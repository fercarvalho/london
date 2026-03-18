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
        className="w-10 h-10 glass rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-all border border-current/10 overflow-hidden relative"
        title={theme === 'light' ? 'Mudar para modo escuro' : 'Mudar para modo claro'}
      >
        <div className={`absolute inset-0 transition-transform duration-500 flex flex-col items-center justify-start ${theme === 'light' ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <Sun className="w-4 h-4 text-text-secondary" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <Moon className="w-4 h-4 text-text-secondary" />
          </div>
        </div>
      </button>
    </div>
  );
};
