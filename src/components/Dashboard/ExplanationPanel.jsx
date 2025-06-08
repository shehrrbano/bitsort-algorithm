import React from 'react';

const ExplanationPanel = ({ bitSort, animation, theme }) => {
  const {
    sortingSteps,
    currentStep,
    isSorted
  } = bitSort;

  const { isPlaying } = animation;

  const getCurrentDescription = () => {
    if (sortingSteps[currentStep]) {
      return sortingSteps[currentStep].description;
    }
    return 'Ready to start BitSort algorithm';
  };

  const getCurrentExplanation = () => {
    if (isSorted) {
      return "🎉 Sorting complete! All numbers are now arranged in ascending order using the BitSort algorithm.";
    } else if (currentStep === 0) {
      return "Click 'Generate Array' to load your numbers, then press 'Play' to watch the BitSort algorithm in action.";
    } else {
      return "BitSort works by processing each bit position and grouping numbers with 0s before 1s at each position.";
    }
  };

  return (
    <div className={`lg:col-span-4 ${theme.cardClass} rounded-lg p-4`}>
      <div className={`font-bold ${theme.textClass} mb-2`}>
        {getCurrentDescription()}
      </div>
      <div className={theme.textClass}>
        {getCurrentExplanation()}
      </div>
    </div>
  );
};

export default ExplanationPanel;