import { DEFAULT_ARRAYS, ARRAY_LIMITS } from './constants';

// Generate random array
export const generateRandom = () => {
  const size = Math.floor(Math.random() * 5) + 5; // 5-9 elements
  const numbers = Array.from({length: size}, () => 
    Math.floor(Math.random() * 100) + 1
  );
  return numbers.join(', ');
};

// Get sorted array
export const generateSorted = () => {
  return DEFAULT_ARRAYS.sorted.join(', ');
};

// Get reverse sorted array
export const generateReverse = () => {
  return DEFAULT_ARRAYS.reverse.join(', ');
};

// Get nearly sorted array
export const generateNearlySorted = () => {
  return DEFAULT_ARRAYS.nearlySorted.join(', ');
};

// Parse input text to array
export const parseInputText = (inputText) => {
  try {
    const numbers = inputText
      .split(',')
      .map(s => parseInt(s.trim()))
      .filter(n => !isNaN(n) && n >= ARRAY_LIMITS.minValue && n <= ARRAY_LIMITS.maxValue);
    
    return {
      numbers,
      isValid: numbers.length > 0 && numbers.length <= ARRAY_LIMITS.maxSize,
      error: numbers.length === 0 
        ? `Please enter valid positive numbers (${ARRAY_LIMITS.minValue}-${ARRAY_LIMITS.maxValue})`
        : numbers.length > ARRAY_LIMITS.maxSize 
        ? `Please enter maximum ${ARRAY_LIMITS.maxSize} numbers for better visualization`
        : null
    };
  } catch (error) {
    return {
      numbers: [],
      isValid: false,
      error: 'Please enter valid numbers separated by commas'
    };
  }
};