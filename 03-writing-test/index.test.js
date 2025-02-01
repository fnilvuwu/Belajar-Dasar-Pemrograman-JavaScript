import assert from 'node:assert';
import { test } from 'node:test';
import { sum } from './index.js';

test('sum adds two numbers correctly', () => {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(0, 0), 0);
    assert.strictEqual(sum(-5, -5), -10);
});
