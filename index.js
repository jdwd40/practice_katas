const smallest = (arr) => {
  if (arr === undefined || arr.length === 0) return [];
  console.log('inside smallest()');
  // find smallest number in array
  return Math.min(...arr);
};

const largest = (arr1, n) => {
  if (arr1 === undefined || arr1.length === 0) return [];
  if (n === undefined) {
    n = 0;
  }
  console.log('inside largest()');
  let max = Math.max.apply(null, arr1);
  arr1.splice(arr1.indexOf(max), n); // remove n from max from the array
  return Math.max.apply(null, arr1);
};

// sort thu array arrange it from smallest to largest
// select the element thats being asked for from the argument
module.exports = { smallest, largest };
