import React from 'react';
import { SORTING_ALGORITHMS, ARRAY_SIZES } from '../../utils/constants';

const AlgorithmSelector = ({ theme }) => {
  const selectors = [
    {
      label: 'Algorithm 1:',
      options: [SORTING_ALGORITHMS.bitSort],
      defaultValue: SORTING_ALGORITHMS.bitSort
    },
    {
      label: 'Algorithm 2:',
      options: [
        SORTING_ALGORITHMS.quickSort,
        SORTING_ALGORITHMS.mergeSort,
        SORTING_ALGORITHMS.bubbleSort,
        SORTING_ALGORITHMS.selectionSort
      ],
      defaultValue: SORTING_ALGORITHMS.quickSort
    },
    {
      label: 'Array Size:',
      options: Object.values(ARRAY_SIZES),
      defaultValue: ARRAY_SIZES.small
    }
  ];

  return (
    <div className={`${theme.cardClass} rounded-lg p-4 mb-4 flex flex-wrap items-center justify-between gap-4`}>
      {selectors.map((selector, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-2">
            <label className={`${theme.textClass} font-bold`}>{selector.label}</label>
            <select className={`p-2 border rounded ${theme.inputClass}`}>
              {selector.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          {index === 0 && (
            <div className="text-xl font-bold text-red-500">VS</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AlgorithmSelector;