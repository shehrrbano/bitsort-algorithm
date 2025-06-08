import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme to localStorage when changed
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Generate theme classes
  const getThemeClasses = () => ({
    bgClass: darkMode ? 'bg-gray-900' : 'bg-gray-100',
    cardClass: darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300',
    textClass: darkMode ? 'text-white' : 'text-slate-700',
    headerClass: darkMode ? 'bg-gray-800' : 'bg-slate-700',
    inputClass: darkMode 
      ? 'bg-gray-700 border-gray-600 text-white' 
      : 'bg-white border-gray-300 text-slate-700',
    secondaryBgClass: darkMode ? 'bg-gray-700' : 'bg-gray-50'
  });

  return {
    darkMode,
    toggleTheme,
    ...getThemeClasses()
  };
};