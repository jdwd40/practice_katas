const { smallest, largest } = require('../index');

const numberData = [1, 0, 2, 3, 56, 5, 66, 7, 8, 99, 10];

describe('Smallest Array ', () => {
  test('returns an empty array when smallest() is given an empty array', () => {
    expect(smallest([])).toEqual([]);
  });
  test('returns an empty array when smallest() is sent an empty argument', () => {
    expect(smallest()).toEqual([]);
  });
  test('returns the smallest number given an array when smallest() is passed an array', () => {
    expect(smallest(numberData)).toEqual(0);
  });
  test('returns the second smallest number given an array when smallest(arr, 2) is passed an array and an n value of 2', () => {
    expect(smallest(numberData)).toEqual(0);
  });
});

describe('Largest Array ', () => {
  test('returns an empty array when larest() is given an empty array', () => {
    expect(largest([])).toEqual([]);
  });
  test('returns an empty array when largest() is sent an empty argument', () => {
    expect(largest()).toEqual([]);
  });
  test('returns the largest number given an array when largest() is passed an array', () => {
    expect(largest(numberData)).toEqual(99);
  });
  test('returns the second largest number given an array when largest(arr, 2) is passed an array and an n value of 2', () => {
    expect(largest(numberData, 2)).toEqual(66);
  });
});
