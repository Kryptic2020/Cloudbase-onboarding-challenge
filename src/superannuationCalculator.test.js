import calculateSuperannuation from './helpers/superannuationCalculator'

test('calculateSuperannuation return the correct super amount', () => {
  const testCases = [
    { superPercentage: 0.105, income: 10000, expectedSuper: 1050 },
    { superPercentage: 0.105, income: 20000, expectedSuper: 2100 },
    { superPercentage: 0.105, income: 50000, expectedSuper: 5250 },
    { superPercentage: 0.105, income: 100000, expectedSuper: 10500 },
    { superPercentage: 0.105, income: 200000, expectedSuper: 21000 },
  ];
  testCases.forEach((testCase) => {
    expect(calculateSuperannuation(testCase.income, testCase.superPercentage)).toBe(testCase.expectedSuper);
  });
});
