export default function calculateTaxIncome(income) {
  let tax = 0;

  if (income <= 18200) {
    // No tax payable for income less than or equal to $18,200
    tax = 0;
  } else if (income <= 45000) {
    // 19 cents for each $1 over $18,200
    tax = (income - 18200) * 0.19;
  } else if (income <= 120000) {
    // $5,092 plus 32.5 cents for each $1 over $45,000
    tax = 5092 + (income - 45000) * 0.325;
  } else if (income <= 180000) {
    // $29,467 plus 37 cents for each $1 over $120,000
    tax = 29467 + (income - 120000) * 0.37;
  } else {
    // $51,667 plus 45 cents for each $1 over $180,000
    tax = 51667 + (income - 180000) * 0.45;
  }

  return tax;
}

// Example usage
const income = 80000; // $80,000
const tax = calculateTaxIncome(income);
console.log(`Tax payable for an income of $${income.toLocaleString()} is $${tax.toLocaleString()}.`);
// The code defines a function calculateTaxIncome that takes an income parameter and calculates the tax payable based on the current Australian tax rates. The function uses a series of if-else statements to determine the appropriate tax rate for the given income.

// The code also includes an example usage that calculates the tax payable for an income of $80,000 and logs the result to the console. You can modify the income variable to test the function with different income levels.



