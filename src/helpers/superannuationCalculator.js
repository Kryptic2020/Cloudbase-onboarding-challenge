export default function calculateSuperannuation(income, superGuaranteePercentage) {
  return income * superGuaranteePercentage;
}
// Example usage
const income = 80000; // $80,000
const superGuaranteePercentage = 0.105
const superannuation = calculateSuperannuation(income, superGuaranteePercentage)
console.log(`Super payable for an income of $${income.toLocaleString()} is $${superannuation.toLocaleString()}.`)
// The code defines a function calculateSuperannuation that takes an income and super % as parameter and calculates the super payable based on the current Australian general super guarantee rate. The function multiply the given income by the givern super percentage and return the super amount payable.

// The code also includes an example usage that calculates the tax payable for an income of $80,000 with 10.5% super and logs the result to the console. You can modify the income variable to test the function with different income levels.