import React from 'react';

const AlgorithmExplanation = ({ theme }) => {
  const steps = [
    {
      title: 'Step 1: Convert to Binary',
      description: 'Convert all numbers to binary with the same bit length.'
    },
    {
      title: 'Step 2: Process Each Bit',
      description: 'Go through each bit position from left to right.'
    },
    {
      title: 'Step 3: Group by Bit Value',
      description: 'Separate numbers: those with 0 in current position, then those with 1.'
    },
    {
      title: 'Step 4: Repeat',
      description: 'Continue until all bit positions are processed and array is sorted.'
    }
  ];

  return (
    <div className={`${theme.cardClass} rounded-lg p-6 shadow mt-6`}>
      <h3 className={`${theme.textClass} font-bold mb-4`}>How BitSort Works</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <div key={index} className={`p-4 rounded-lg ${theme.secondaryBgClass}`}>
            <h4 className={`font-bold mb-2 ${theme.textClass}`}>{step.title}</h4>
            <p className={theme.textClass}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmExplanation;