import React from 'react';

const SettingsModal = ({
  showSettings,
  setShowSettings,
  showBinary,
  setShowBinary,
  showStepNumbers,
  setShowStepNumbers,
  animationSpeed,
  setAnimationSpeed,
  theme
}) => {
  if (!showSettings) return null;

  const ToggleSwitch = ({ checked, onChange, label, description }) => (
    <div className="flex justify-between items-center">
      <div>
        <div className={`${theme.textClass} font-medium`}>{label}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
      <button
        className={`relative w-12 h-6 rounded-full transition ${
          checked ? 'bg-red-500' : 'bg-gray-400'
        }`}
        onClick={() => onChange(!checked)}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          checked ? 'translate-x-7' : 'translate-x-1'
        }`} />
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${theme.cardClass} rounded-lg w-11/12 max-w-2xl max-h-96 overflow-y-auto`}>
        <div className="bg-slate-700 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-lg font-bold">Settings</h2>
          <button
            className="text-white hover:text-red-400 text-xl"
            onClick={() => setShowSettings(false)}
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            <ToggleSwitch
              checked={showBinary}
              onChange={setShowBinary}
              label="Show Binary Representation"
              description="Display binary form of numbers"
            />
            
            <ToggleSwitch
              checked={showStepNumbers}
              onChange={setShowStepNumbers}
              label="Show Step Numbers"
              description="Display step counter"
            />
            
            <div className="flex justify-between items-center">
              <div>
                <div className={`${theme.textClass} font-medium`}>Animation Speed</div>
                <div className="text-gray-500 text-sm">Control animation speed</div>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="500"
                  max="3000"
                  value={animationSpeed}
                  onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
                  className="w-24"
                />
                <span className={`${theme.textClass} min-w-16 text-sm`}>
                  {animationSpeed}ms
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => setShowSettings(false)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;