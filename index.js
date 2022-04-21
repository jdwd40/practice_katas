const smallest = (arr) => {
  if (arr === undefined || arr.length === 0) return [];
  // find smallest number in array
  return Math.min(...arr);
};

const largest = (arr) => {
  if (arr === undefined || arr.length === 0) return [];
  return Math.max(...arr);
};

module.exports = smallest, largest;
