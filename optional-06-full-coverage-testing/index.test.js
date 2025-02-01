import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum of two positive numbers', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test('sum with negative numbers', () => {
  const result1 = sum(-1, 5);
  const result2 = sum(5, -1);
  const result3 = sum(-1, -1);

  assert.strictEqual(result1, 0);
  assert.strictEqual(result2, 0);
  assert.strictEqual(result3, 0);
});

test('sum with non-number input', () => {
  const result1 = sum('a', 2);
  const result2 = sum(2, 'b');
  const result3 = sum('a', 'b');
  const result4 = sum([], 3);
  const result5 = sum(3, {});

  assert.strictEqual(result1, 0);
  assert.strictEqual(result2, 0);
  assert.strictEqual(result3, 0);
  assert.strictEqual(result4, 0);
  assert.strictEqual(result5, 0);
});

test('sum with zero', () => {
  const result1 = sum(0, 5);
  const result2 = sum(5, 0);

  assert.strictEqual(result1, 5);
  assert.strictEqual(result2, 5);
});
