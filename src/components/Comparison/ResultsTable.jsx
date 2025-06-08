import React from 'react';

const ResultsTable = ({ bitSort, theme }) => {
  const { operations } = bitSort;

  const algorithms = [
    {
      name: 'BitSort',
      timeComplexity: 'O(nk)',
      spaceComplexity: 'O(n)',
      operations: `${operations} operations`,
      bestCase: 'O(nk)',
      worstCase: 'O(nk)'
    },
    {
      name: 'Quick Sort',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(log n)',
      operations: `${Math.floor(operations * 0.7)} comparisons`,
      bestCase: 'O(n log n)',
      worstCase: 'O(n²)'
    }
  ];

  const tableHeaders = [
    'Algorithm',
    'Time Complexity',
    'Space Complexity',
    'Operations',
    'Best Case',
    'Worst Case'
  ];

  const recommendations = [
    '• Integer-only data with bounded ranges',
    '• Educational purposes to understand non-comparison sorting',
    '• Scenarios where bit operations are efficient',
    '• Understanding radix-based sorting algorithms'
  ];

  return (
    <div className={`${theme.cardClass} rounded-lg p-6`}>
      <h3 className={`${theme.textClass} font-bold mb-6 text-xl text-center`}>Performance Comparison Results</h3>
      
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700 text-white">
              {tableHeaders.map((header, index) => (
                <th key={index} className="p-3 text-left font-bold">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {algorithms.map((algorithm, index) => (
              <tr key={index} className={`${index === 0 ? 'border-b' : ''} hover:${theme.secondaryBgClass}`}>
                <td className={`p-3 font-bold ${theme.textClass}`}>{algorithm.name}</td>
                <td className={`p-3 ${theme.textClass}`}>{algorithm.timeComplexity}</td>
                <td className={`p-3 ${theme.textClass}`}>{algorithm.spaceComplexity}</td>
                <td className={`p-3 ${theme.textClass}`}>{algorithm.operations}</td>
                <td className={`p-3 ${theme.textClass}`}>{algorithm.bestCase}</td>
                <td className={`p-3 ${theme.textClass}`}>{algorithm.worstCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommendation */}
      <div className={`rounded-lg p-6 ${theme.secondaryBgClass}`}>
        <div className={`${theme.textClass} font-bold mb-4 text-lg`}>Algorithm Recommendation</div>
        <div className={`${theme.textClass} mb-4`}>
          BitSort is excellent for educational purposes and integer-only datasets. Quick Sort performs better 
          for general-purpose sorting with mixed data types.
        </div>
        <div className={`${theme.textClass} font-bold mb-2`}>BitSort is recommended for:</div>
        <ul className={`${theme.textClass} ml-6 space-y-2`}>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsTable;