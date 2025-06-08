// Convert number to binary with padding
export const toBinary = (num, bits = 4) => {
  return num.toString(2).padStart(bits, '0');
};

// Calculate required bits for the array
export const calculateBits = (array) => {
  const maxNum = Math.max(...array);
  return Math.max(4, Math.ceil(Math.log2(maxNum + 1)));
};

// Generate all sorting steps
export const generateSortingSteps = (array) => {
  const steps = [];
  const workingArray = [...array];
  const bits = calculateBits(array);
  let operationCount = 0;

  // Add initial step
  steps.push({
    array: [...workingArray],
    bitPosition: -1,
    description: "Starting BitSort algorithm - Convert numbers to binary",
    operations: operationCount,
    isComplete: false
  });

  // Process each bit position from left to right
  for (let bitPos = 0; bitPos < bits; bitPos++) {
    const zerosGroup = [];
    const onesGroup = [];

    // Separate numbers based on current bit
    for (let i = 0; i < workingArray.length; i++) {
      const binary = toBinary(workingArray[i], bits);
      const currentBit = binary[bitPos];
      operationCount++;

      if (currentBit === '0') {
        zerosGroup.push(workingArray[i]);
      } else {
        onesGroup.push(workingArray[i]);
      }
    }

    // Combine: zeros first, then ones
    const newArray = [...zerosGroup, ...onesGroup];
    workingArray.splice(0, workingArray.length, ...newArray);

    steps.push({
      array: [...workingArray],
      bitPosition: bitPos,
      description: `Processing bit position ${bitPos + 1}: Separating 0s and 1s`,
      operations: operationCount,
      isComplete: false
    });
  }

  // Mark as complete
  steps[steps.length - 1].isComplete = true;
  steps[steps.length - 1].description = "Sorting complete! Array is now sorted";

  return steps;
};

// Check if array is sorted
export const isSorted = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
};