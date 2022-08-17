import operate from '../../logic/operate';

describe('operation test', () => {
  test('test the add operator', () => {
    const addOperator = operate(5, 5, '+');
    expect(addOperator).toBe('10');
  });

  test('test for substraction', () => {
    const substractOperator = operate(15, 5, '-');
    expect(substractOperator).toBe('10');
  });

  test('test for multiplication', () => {
    const multiplyOperator = operate(15, 2, 'x');
    expect(multiplyOperator).toBe('30');
  });

  test('test for divide', () => {
    const divideOperator = operate(15, 5, '÷');
    expect(divideOperator).toBe('3');
  });
});
