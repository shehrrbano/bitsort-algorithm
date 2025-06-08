import React from 'react';

const SynchronizedControls = ({ bitSort, animation, theme }) => {
  const {
    handleReset,
    handlePrevious,
    handleNext,
    handleEnd
  } = bitSort;

  const {
    isPlaying,
    animationSpeed,
    setAnimationSpeed,
    handlePlay
  } = animation;

  const controlButtons = [
    {
      onClick: handleReset,
      label: 'Reset Both',
      className: 'px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition'
    },
    {
      onClick: handleReset,
      label: '⏮ Start',
      className: 'px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition'
    },
    {
      onClick: handlePrevious,
      label: '⏪ Step Back',
      className: 'px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition'
    },
    {
      onClick: handlePlay,
      label: isPlaying ? '⏸ Pause Sync' : '▶ Play Sync',
      className: 'px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'
    },
    {
      onClick: handleNext,
      label: '⏩ Step Forward',
      className: 'px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition'
    },
    {
      onClick: handleEnd,
      label: '⏭ End',
      className: 'px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition'
    }
  ];

  return (
    <div className={`${theme.cardClass} rounded-lg p-4 mb-6`}>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {controlButtons.map((button, index) => (
          <button 
            key={index}
            className={button.className}
            onClick={button.onClick}
          >
            {button.label}
          </button>
        ))}
        
        <div className="flex items-center gap-2">
          <input 
            type="range" 
            className="w-24" 
            min="500" 
            max="3000" 
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
          />
          <span className={`${theme.textClass} text-sm`}>Speed</span>
        </div>
      </div>
    </div>
  );
};

export default SynchronizedControls;