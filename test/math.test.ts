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
