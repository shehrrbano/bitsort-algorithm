import React from 'react';

const ComparisonPanels = ({ bitSort, theme }) => {
  const { currentArray, currentBitPosition, operations, sortingSteps, currentStep } = bitSort;

  const AlgorithmPanel = ({ 
    title, 
    complexity, 
    statusText, 
    operationsLabel, 
    operationsValue, 
    timeValue, 
    progressValue,
    highlightCondition 
  }) => (
    <div className={`${theme.cardClass} rounded-lg overflow-hidden`}>
      <div className="bg-slate-700 text-white p-4 text-center">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <div className="text-gray-300 text-sm">{complexity}</div>
      </div>
      
      <div className="p-4">
        <div className={`text-center text-sm font-bold p-2 rounded mb-4 ${theme.secondaryBgClass}`}>
          {statusText}
        </div>
        
        <div className={`flex justify-center gap-2 p-4 rounded-lg mb-4 min-h-20 items-center ${theme.secondaryBgClass}`}>
          {currentArray.slice(0, 5).map((num, index) => (
            <div
              key={index}
              className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${
                highlightCondition(index) ? 'bg-red-500 text-white transform -translate-y-1' : 'bg-gray-400 text-white'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className={`text-center p-3 rounded border ${theme.secondaryBgClass}`}>
            <span className="block text-gray-500 text-xs mb-1">{operationsLabel}</span>
            <span className="block text-red-500 font-bold text-lg">{operationsValue}</span>
          </div>
          <div className={`text-center p-3 rounded border ${theme.secondaryBgClass}`}>
            <span className="block text-gray-500 text-xs mb-1">Time (ms)</span>
            <span className="block text-red-500 font-bold text-lg">{timeValue}</span>
          </div>
          <div className={`text-center p-3 rounded border ${theme.secondaryBgClass}`}>
            <span className="block text-gray-500 text-xs mb-1">Memory</span>
            <span className="block text-red-500 font-bold text-lg">O(n)</span>
          </div>
          <div className={`text-center p-3 rounded border ${theme.secondaryBgClass}`}>
            <span className="block text-gray-500 text-xs mb-1">Progress</span>
            <span className="block text-red-500 font-bold text-lg">{progressValue}%</span>
          </div>
        </div>
      </div>
    </div>
  );

  const bitSortProgress = sortingSteps.length > 0 ? Math.round((currentStep / (sortingSteps.length - 1)) * 100) : 0;
  const quickSortProgress = Math.min(bitSortProgress + 15, 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <AlgorithmPanel
        title="BitSort Algorithm"
        complexity="O(nk) - Non-comparison based"
        statusText={`Processing bit position ${currentBitPosition + 1} of ${bitSort.maxBits}`}
        operationsLabel="Operations"
        operationsValue={operations}
        timeValue="1.2"
        progressValue={bitSortProgress}
        highlightCondition={(index) => index === currentBitPosition}
      />
      
      <AlgorithmPanel
        title="Quick Sort Algorithm"
        complexity="O(n log n) - Comparison based"
        statusText="Partitioning around pivot"
        operationsLabel="Comparisons"
        operationsValue={Math.floor(operations * 0.7)}
        timeValue="0.8"
        progressValue={quickSortProgress}
        highlightCondition={(index) => index === 0 || index === 2 ? false : index === 1 || index === 3}
      />
    </div>
  );
};

export default ComparisonPanels;