const smallest = require('../index');

const numberData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Smallest and Largest Array', () => {
  test('returns an empty array when given an empty array', () => {
    expect(smallest([])).toEqual([]);
  });
  test('returns an empty array when sent an empty argument', () => {
    expect(smallest()).toEqual([]);
  });
  test('returns the smallest number given an array', () => {
    expect(smallest(numberData)).toEqual(1);
  });
});
