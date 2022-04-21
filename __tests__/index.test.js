const smallest = require('../index');
const largest = require('../index');

const numberData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Smallest and Largest Array', () => {
  test('returns an empty array when smallest() is given an empty array', () => {
    expect(smallest([])).toEqual([]);
  });
  test('returns an empty array when smallest() is sent an empty argument', () => {
    expect(smallest()).toEqual([]);
  });
  test('returns the largest number given an array when largest() is passed an array', () => {
    expect(largest(numberData)).toEqual(1);
  });
  test('returns an empty array when largest() is given an empty array', () => {
    expect(largest([])).toEqual([]);
  });
  test('returns an empty array when largest() is sent an empty argument', () => {
    expect(largest()).toEqual([]);
  });
  test('returns the smallest number given an array when smallest is passed an array', () => {
    expect(smallest(numberData)).toEqual(1);
  });
});
