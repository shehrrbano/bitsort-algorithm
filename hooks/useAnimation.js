import { useState, useEffect, useCallback } from 'react';

export const useAnimation = (bitSortHook) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1000);

  const {
    sortingSteps,
    currentStep,
    isSorted,
    handleNext,
    handleGenerateArray
  } = bitSortHook;

  // Auto-advance animation
  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < sortingSteps.length - 1) {
      timer = setTimeout(() => {
        const hasNext = handleNext();
        if (!hasNext) {
          setIsPlaying(false);
        }
      }, animationSpeed);
    } else if (isPlaying && currentStep >= sortingSteps.length - 1) {
      setIsPlaying(false);
    }

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, sortingSteps, animationSpeed, handleNext]);

  // Handle play/pause
  const handlePlay = useCallback(() => {
    if (sortingSteps.length === 0) {
      const success = handleGenerateArray();
      if (success) {
        setIsPlaying(true);
      }
      return;
    }
    
    if (isSorted) {
      return;
    }
    
    setIsPlaying(!isPlaying);
  }, [sortingSteps, handleGenerateArray, isSorted, isPlaying]);

  // Stop animation
  const stopAnimation = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return {
    isPlaying,
    animationSpeed,
    setAnimationSpeed,
    handlePlay,
    stopAnimation
  };
};