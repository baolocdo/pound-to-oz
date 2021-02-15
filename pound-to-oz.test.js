// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { getOz } = require('./pound-to-oz');

test('should return 16 when mass is 1', () => {
  expect(getOz(1)).toBe(16);
});

test('should return 64 when mass is 4', () => {
  expect(getOz(4)).toBe(64);
});

test('should return 0 when mass is 0', () => {
  expect(getOz(0)).toBe(0);
});

test('should return 32 when mass is 2', () => {
  expect(getOz(2)).toBe(32);
});

test('should return 160 when mass is 10', () => {
  expect(getOz(10)).toBe(160);
});