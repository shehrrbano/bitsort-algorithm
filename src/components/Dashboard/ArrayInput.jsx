import React from 'react';
import { 
  generateRandom, 
  generateSorted, 
  generateReverse, 
  generateNearlySorted 
} from '../../utils/arrayGenerators';

const ArrayInput = ({ bitSort, theme }) => {
  const {
    inputText,
    setInputText,
    currentArray,
    handleGenerateArray
  } = bitSort;

  const presetButtons = [
    { label: 'Random', action: () => setInputText(generateRandom()) },
    { label: 'Sorted', action: () => setInputText(generateSorted()) },
    { label: 'Reverse', action: () => setInputText(generateReverse()) },
    { label: 'Nearly Sorted', action: () => setInputText(generateNearlySorted()) }
  ];

  return (
    <div className={`${theme.cardClass} rounded-lg p-4 shadow`}>
      <h3 className={`${theme.textClass} font-bold mb-4`}>Array Input</h3>
      
      <input
        type="text"
        className={`w-full p-3 border rounded mb-4 ${theme.inputClass}`}
        placeholder="Enter numbers (e.g., 12, 45, 23, 8)"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        {presetButtons.map((button, index) => (
          <button
            key={index}
            className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-red-500 transition"
            onClick={button.action}
          >
            {button.label}
          </button>
        ))}
      </div>
      
      <button
        className="w-full p-3 bg-red-500 text-white rounded font-bold mb-4 hover:bg-red-600 transition"
        onClick={handleGenerateArray}
      >
        Generate Array
      </button>
      
      <h4 className={`${theme.textClass} font-bold mb-2`}>Current Array:</h4>
      <div className="flex flex-wrap gap-2">
        {currentArray.map((num, index) => (
          <div
            key={index}
            className={`px-3 py-2 rounded font-bold min-w-[40px] text-center ${theme.inputClass} border`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayInput;