import { useState, useCallback } from 'react';
import { generateSortingSteps, calculateBits } from '../utils/bitSortAlgorithm';
import { parseInputText } from '../utils/arrayGenerators';
import { DEFAULT_ARRAYS } from '../utils/constants';

export const useBitSort = () => {
  // Array and sorting state
  const [inputText, setInputText] = useState('7, 1, 11, 14, 13, 9, 5, 6');
  const [originalArray, setOriginalArray] = useState(DEFAULT_ARRAYS.example);
  const [currentArray, setCurrentArray] = useState(DEFAULT_ARRAYS.example);
  const [sortingSteps, setSortingSteps] = useState([]);
  
  // Animation state
  const [currentStep, setCurrentStep] = useState(0);
  const [currentBitPosition, setCurrentBitPosition] = useState(0);
  const [maxBits, setMaxBits] = useState(4);
  const [operations, setOperations] = useState(0);
  const [isSorted, setIsSorted] = useState(false);

  // Generate array from input
  const handleGenerateArray = useCallback(() => {
    const { numbers, isValid, error } = parseInputText(inputText);
    
    if (!isValid) {
      alert(error);
      return false;
    }

    // Reset everything
    setOriginalArray(numbers);
    setCurrentArray(numbers);
    const bits = calculateBits(numbers);
    setMaxBits(bits);
    
    // Generate all steps
    const steps = generateSortingSteps(numbers);
    setSortingSteps(steps);
    
    // Reset animation state
    setCurrentStep(0);
    setCurrentBitPosition(-1);
    setOperations(0);
    setIsSorted(false);

    return true;
  }, [inputText]);

  // Reset to initial state
  const handleReset = useCallback(() => {
    setCurrentStep(0);
    setCurrentArray(originalArray);
    setCurrentBitPosition(-1);
    setOperations(0);
    setIsSorted(false);
    if (sortingSteps.length > 0) {
      setCurrentArray(sortingSteps[0].array);
    }
  }, [originalArray, sortingSteps]);

  // Go to next step
  const handleNext = useCallback(() => {
    if (currentStep < sortingSteps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setCurrentArray(sortingSteps[nextStep].array);
      setCurrentBitPosition(sortingSteps[nextStep].bitPosition);
      setOperations(sortingSteps[nextStep].operations);
      
      if (sortingSteps[nextStep].isComplete) {
        setIsSorted(true);
      }
      return true;
    }
    return false;
  }, [currentStep, sortingSteps]);

  // Go to previous step
  const handlePrevious = useCallback(() => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setCurrentArray(sortingSteps[prevStep].array);
      setCurrentBitPosition(sortingSteps[prevStep].bitPosition);
      setOperations(sortingSteps[prevStep].operations);
      setIsSorted(false);
      return true;
    }
    return false;
  }, [currentStep, sortingSteps]);

  // Jump to end
  const handleEnd = useCallback(() => {
    if (sortingSteps.length > 0) {
      const lastStep = sortingSteps.length - 1;
      setCurrentStep(lastStep);
      setCurrentArray(sortingSteps[lastStep].array);
      setCurrentBitPosition(sortingSteps[lastStep].bitPosition);
      setOperations(sortingSteps[lastStep].operations);
      setIsSorted(true);
    }
  }, [sortingSteps]);

  return {
    // State
    inputText,
    setInputText,
    originalArray,
    currentArray,
    sortingSteps,
    currentStep,
    currentBitPosition,
    maxBits,
    operations,
    isSorted,
    
    // Actions
    handleGenerateArray,
    handleReset,
    handleNext,
    handlePrevious,
    handleEnd
  };
};