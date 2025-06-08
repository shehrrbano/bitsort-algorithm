import React from 'react';

const ComplexityAnalysis = ({ bitSort, theme }) => {
  const { currentArray, maxBits } = bitSort;

  const complexityMetrics = [
    {
      label: 'Array Size (n):',
      value: currentArray.length,
      color: 'text-red-500'
    },
    {
      label: 'Bit Length (k):',
      value: `${maxBits} bits`,
      color: 'text-red-500'
    },
    {
      label: 'Total Operations:',
      value: currentArray.length * maxBits,
      color: 'text-red-500'
    },
    {
      label: 'Space Complexity:',
      value: 'O(n)',
      color: 'text-red-500'
    }
  ];

  return (
    <div className={`${theme.cardClass} rounded-lg p-6 shadow`}>
      <h3 className={`${theme.textClass} font-bold mb-4`}>Complexity Analysis</h3>
      
      <div className="bg-slate-700 text-white p-4 rounded-lg mb-4 text-center font-mono text-xl">
        T(n) = O(n × k)
      </div>
      
      <div className="space-y-3">
        {complexityMetrics.map((metric, index) => (
          <div key={index} className={`flex justify-between p-3 rounded ${theme.secondaryBgClass}`}>
            <span className={`font-bold ${theme.textClass}`}>{metric.label}</span>
            <span className={metric.color}>{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplexityAnalysis;