import React from 'react';
import Controls from '../Common/Controls';
import { toBinary } from '../../utils/bitSortAlgorithm';

const VisualizationArea = ({ bitSort, animation, showBinary, theme }) => {
  const {
    currentArray,
    currentBitPosition,
    maxBits
  } = bitSort;

  return (
    <div className={`lg:col-span-2 ${theme.cardClass} rounded-lg p-4 shadow flex flex-col`}>
      <div className="flex-1 space-y-4 mb-4 max-h-96 overflow-y-auto">
        {currentArray.map((number, index) => (
          <div key={index} className={`flex items-center gap-4 p-3 rounded-lg ${theme.secondaryBgClass}`}>
            <div className="bg-slate-700 text-white px-3 py-2 rounded font-bold min-w-[60px] text-center">
              {number}
            </div>
            {showBinary && (
              <div className="flex gap-1">
                {toBinary(number, maxBits).split('').map((bit, bitIndex) => (
                  <div
                    key={bitIndex}
                    className={`w-8 h-8 flex items-center justify-center rounded font-bold text-sm border-2 transition-all ${
                      bitIndex === currentBitPosition ? 'border-slate-700 scale-110' : 'border-transparent'
                    } ${
                      bit === '1' ? 'bg-red-500 text-white' : 'bg-gray-400 text-slate-700'
                    }`}
                  >
                    {bit}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <Controls 
        bitSort={bitSort}
        animation={animation}
        theme={theme}
      />
    </div>
  );
};

export default VisualizationArea;