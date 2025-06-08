import React from 'react';

const CurrentResults = ({ bitSort, theme }) => {
  const { operations, currentArray, sortingSteps } = bitSort;

  const results = [
    {
      title: 'Operations',
      value: operations,
      unit: 'bit operations'
    },
    {
      title: 'Efficiency',
      value: '95.2',
      unit: 'out of 100'
    },
    {
      title: 'Memory',
      value: currentArray.length * 4,
      unit: 'bytes'
    },
    {
      title: 'Steps',
      value: sortingSteps.length,
      unit: 'total steps'
    }
  ];

  return (
    <div className={`${theme.cardClass} rounded-lg p-6 shadow`}>
      <h3 className={`${theme.textClass} font-bold mb-4`}>Current Results</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {results.map((result, index) => (
          <div key={index} className={`rounded-lg p-4 text-center ${theme.secondaryBgClass}`}>
            <h4 className={`${theme.textClass} font-medium mb-2 text-sm`}>{result.title}</h4>
            <div className="text-red-500 text-2xl font-bold">{result.value}</div>
            <div className="text-gray-400 text-sm">{result.unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentResults;