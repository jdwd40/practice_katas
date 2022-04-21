const smallest = (arr) => {
  if (arr === undefined || arr.length === 0) return [];

  // find smallest number in array
  return Math.min(...arr);
};

module.exports = smallest;
