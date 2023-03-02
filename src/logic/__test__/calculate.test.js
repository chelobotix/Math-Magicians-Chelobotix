import calculate from '../calculate';

describe('Operate function', () => {
  test('Add two numbers', () => {
    expect(calculate({
      total: null,
      next: null,
      operation: null,
    }, '4').next).toBe('4');
  })
})