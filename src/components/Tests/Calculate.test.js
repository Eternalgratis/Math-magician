import Calculate from '../../logic/calculate';

describe('Renders Calculator calculate function', () => {
  test('Test AC button on calculator', () => {
    const result = Calculate({ total: '777', next: '75', operation: '' }, 'AC');
    expect(result).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('Test = button on calculator', () => {
    const result = Calculate({ total: '70', next: '75', operation: 'x' }, '=');
    expect(result).toStrictEqual({ total: '5250', next: null, operation: null });
  });

  test('Test +/- button on calculator', () => {
    const plusMinus = Calculate({ total: '70', next: null, operation: null }, '+/-');
    expect(plusMinus).toStrictEqual({ total: '-70', next: null, operation: null });
  });

  test('Test dot button on calculator', () => {
    let dotSymbol = Calculate({ total: null, next: null, operation: null }, '5');
    dotSymbol = Calculate(dotSymbol, '.');
    dotSymbol = Calculate(dotSymbol, '70');
    expect(dotSymbol).toStrictEqual({ total: null, next: '5.70' });
  });

  test('Test - button on calculator', () => {
    const minus = Calculate({ total: '70', next: '90', operation: '-' }, 'x');
    expect(minus).toStrictEqual({ total: '-20', next: null, operation: 'x' });
  });

  test('Test + button on calculator', () => {
    const plus = Calculate({ total: '70', next: '90', operation: '+' }, '+');
    expect(plus).toStrictEqual({ total: '160', next: null, operation: '+' });
  });

  test('Test ÷ button calculator', () => {
    const divide = Calculate({ total: '100', next: '50', operation: '÷' }, '=');
    expect(divide).toStrictEqual({ total: '2', next: null, operation: null });
  });

  test('Test % button on calculator', () => {
    const percentage = Calculate({ total: 'null', next: '1200', operation: null }, '%');
    expect(percentage).toStrictEqual({ total: '1200', next: null, operation: '%' });
  });
});
