const smallest = (arr, n) => {
  if (arr === undefined || arr.length === 0) return [];
  if (n === undefined) {
    n = 0;
  }
  console.log('inside smallest()');
  let max = Math.min.apply(null, arr);
  arr.splice(arr.indexOf(max), n); // remove n from max from the array
  return Math.min.apply(null, arr);
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

const countEven = (arr) => {
  if (arr == undefined || arr.length === 0) return 0;
  const evens = arr.filter((e) => {
    return e % 2 === 0 && e !== 0;
  });
  console.log(evens);
  return evens.length;
};

// sort thu array arrange it from smallest to largest
// select the element thats being asked for from the argument
module.exports = { smallest, largest, countEven };
