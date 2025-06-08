import React from 'react';

const PerformancePanel = ({ bitSort, showStepNumbers, theme }) => {
  const {
    operations,
    currentArray,
    maxBits,
    sortingSteps,
    currentStep,
    currentBitPosition,
    isSorted
  } = bitSort;

  const MetricCard = ({ title, value, subtitle }) => (
    <div className={`${theme.cardClass} rounded-lg p-4`}>
      <h4 className={`${theme.textClass} font-medium mb-2`}>{title}</h4>
      <div className="text-red-500 text-xl font-bold">{value}</div>
      {subtitle && <small className="text-gray-400">{subtitle}</small>}
    </div>
  );

  const progressPercentage = sortingSteps.length > 0 
    ? Math.round((currentStep / (sortingSteps.length - 1)) * 100) 
    : 0;

  return (
    <div className={`${theme.cardClass} rounded-lg p-4 shadow`}>
      <h3 className={`${theme.textClass} font-bold mb-4`}>Performance Metrics</h3>
      
      <div className="space-y-4">
        <MetricCard
          title="Operations Count"
          value={operations}
        />
        
        <MetricCard
          title="Time Complexity"
          value="O(n×k)"
          subtitle={`n=${currentArray.length}, k=${maxBits} bits`}
        />
        
        <div className={`${theme.cardClass} rounded-lg p-4`}>
          <h4 className={`${theme.textClass} font-medium mb-2`}>Progress</h4>
          <div className="text-red-500 text-xl font-bold">
            {progressPercentage}%
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        <MetricCard
          title="Current Step"
          value={showStepNumbers ? `${currentStep + 1} of ${sortingSteps.length}` : 'Step by Step'}
          subtitle={currentBitPosition >= 0 ? `Processing bit ${currentBitPosition + 1}` : 'Ready to start'}
        />
        
        <MetricCard
          title="Status"
          value={isSorted ? 'Sorted!' : bitSort.isPlaying ? 'Running' : 'Ready'}
        />
      </div>
    </div>
  );
};

export default PerformancePanel;