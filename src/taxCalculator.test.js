import calculateTaxIncome from './helpers/taxCalculator'

test('calculateTaxIncome return the correct tax amount', () => {
  const testCases = [
    { income: 10000, expectedTax: 0 },
    { income: 20000, expectedTax: 342 },
    { income: 50000, expectedTax: 6717 },
    { income: 100000, expectedTax: 22967 },
    { income: 200000, expectedTax: 60667 },
  ];
  testCases.forEach((testCase) => {
    expect(calculateTaxIncome(testCase.income)).toBe(testCase.expectedTax);
  });
});
