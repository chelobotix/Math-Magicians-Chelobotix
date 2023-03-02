import operate from '../operate';

describe('Operate function', () => {
  test('Add two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  test('Substract two numbers', () => {
    expect(operate('10', '2', '-')).toBe('8');
  });

  test('Multiple two numbers', () => {
    expect(operate('5', '5', 'x')).toBe('25');
  });

  test('Divide two numbers', () => {
    expect(operate('100', '2', '÷')).toBe('50');
  });

  test('Divide tby zero', () => {
    expect(operate('508', '0', '÷')).toBe("Can't divide by 0.");
  });
});
