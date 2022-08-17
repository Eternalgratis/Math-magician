import calculate from '../../logic/calculate';

describe('Renders Calculator component', () => {
  test('test calculate objects and test contents', () => {
    const obj1 = {
      total: null,
      next: null,
      operation: null,
    };

    const obj2 = {
      total: '0',
      next: '0',
      operation: '+',
    };

    const buttonName1 = 'AC';
    const buttonName2 = '0';

    expect(calculate(obj1, buttonName1)).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });

    expect(calculate(obj2, buttonName2)).toMatchObject({});
  });
});
