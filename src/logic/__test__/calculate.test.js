import calculate from '../calculate';

describe('Operate function', () => {
  test('Add two numbers', () => {
    expect(calculate({
      total: null,
      next: null,
      operation: null,
    }, '4').next).toBe('4');
  });
  test('Clears the output screen', () => {
    expect(calculate({
      total: '5',
      next: '23',
      operation: '+',
    }, 'AC').next).toBeNull();
  });
  test('Displays a decimal number', () => {
    expect(calculate({
      total: '5',
      next: '23',
      operation: '.',
    }, '.').next).toBe('23.');
  });
});
