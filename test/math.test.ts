import { expect, it } from 'vitest';
import { add, sum } from '../src/math.js';

it('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

it('sums two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

it('sums negative numbers', () => {
  expect(sum(-2, 3)).toBe(1);
});

it('sums zeros', () => {
  expect(sum(0, 0)).toBe(0);
});

it('sums exactly representable decimals', () => {
  expect(sum(0.5, 0.25)).toBe(0.75);
});

it('sums large integers', () => {
  expect(sum(1e15, 1)).toBe(1000000000000001);
});
