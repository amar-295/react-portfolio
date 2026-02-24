import { test, expect } from 'vitest';

test('import.meta.env exists', () => {
  expect(import.meta.env).toBeDefined();
});
