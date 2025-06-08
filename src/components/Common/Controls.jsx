import React from 'react';

const Controls = ({ bitSort, animation, theme }) => {
  const {
    currentStep,
    sortingSteps,
    handleReset,
    handleNext,
    handlePrevious,
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
      disabled: false,
      icon: '⏮',
      label: 'Reset'
    },
    {
      onClick: handlePrevious,
      disabled: currentStep === 0,
      icon: '⏪',
      label: 'Previous'
    },
    {
      onClick: handlePlay,
      disabled: false,
      icon: isPlaying ? '⏸' : '▶',
      label: isPlaying ? 'Pause' : 'Play',
      primary: true
    },
    {
      onClick: handleNext,
      disabled: currentStep >= sortingSteps.length - 1,
      icon: '⏩',
      label: 'Next'
    },
    {
      onClick: handleEnd,
      disabled: false,
      icon: '⏭',
      label: 'End'
    }
  ];

  return (
    <div className="bg-gray-400 p-4 rounded-lg flex items-center justify-center gap-4 flex-wrap">
      {controlButtons.map((button, index) => (
        <button
          key={index}
          className={`${
            button.primary 
              ? 'w-12 h-12 bg-red-500 border-none rounded-full text-white text-lg hover:bg-red-600' 
              : 'w-10 h-10 bg-white border border-gray-400 rounded text-slate-700 hover:bg-gray-100'
          } transition ${button.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={button.onClick}
          disabled={button.disabled}
          title={button.label}
        >
          {button.icon}
        </button>
      ))}
      
      <div className="flex items-center gap-2">
        <input
          type="range"
          className="w-32"
          min="500"
          max="3000"
          value={animationSpeed}
          onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
        />
        <span className="text-slate-700 text-sm">Speed</span>
      </div>
    </div>
  );
};

export default Controls;