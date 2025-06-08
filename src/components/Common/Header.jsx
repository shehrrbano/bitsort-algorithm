import React from 'react';
import { TABS, TAB_LABELS } from '../../utils/constants';

const Header = ({ 
  activeTab, 
  setActiveTab, 
  showSettings, 
  setShowSettings, 
  theme 
}) => {
  return (
    <div className={`${theme.headerClass} text-white p-6 shadow-lg`}>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold mb-2">BitSort Algorithm Visualizer</h1>
          <p className="text-gray-300 text-sm">Non-Comparison Based Sorting Method</p>
        </div>
        
        {/* Settings and Dark Mode */}
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded transition"
            onClick={theme.toggleTheme}
          >
            {theme.darkMode ? '☀️' : '🌙'}
            <span>{theme.darkMode ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition"
            onClick={() => setShowSettings(!showSettings)}
          >
            ⚙️ Settings
          </button>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="flex gap-8 mt-4">
        {Object.entries(TAB_LABELS).map(([key, label]) => (
          <button
            key={key}
            className={`pb-2 border-b-2 transition ${
              activeTab === key ? 'border-red-500' : 'border-transparent hover:text-red-400'
            }`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;