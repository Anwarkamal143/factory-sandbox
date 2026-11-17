import { expect, it } from 'vitest';
import { add, difference, product, sum } from '../src/math.js';

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

it('subtracts two numbers', () => {
  expect(difference(5, 3)).toBe(2);
});

it('subtracts in argument order, yielding a negative result', () => {
  expect(difference(2, 5)).toBe(-3);
});

it('subtracts zeros', () => {
  expect(difference(0, 0)).toBe(0);
});

it('subtracts exactly representable decimals', () => {
  expect(difference(0.75, 0.25)).toBe(0.5);
});

it('subtracts large integers', () => {
  expect(difference(1e15 + 1, 1)).toBe(1e15);
});

it('multiplies two numbers', () => {
  expect(product(2, 3)).toBe(6);
});

it('multiplies a negative and a positive number', () => {
  expect(product(-2, 3)).toBe(-6);
});

it('multiplies two negative numbers', () => {
  expect(product(-2, -3)).toBe(6);
});

it('multiplies by zero', () => {
  expect(product(5, 0)).toBe(0);
});

it('multiplies exactly representable decimals', () => {
  expect(product(0.5, 0.25)).toBe(0.125);
});

it('multiplies large integers', () => {
  expect(product(1000000, 1000000)).toBe(1000000000000);
});
