const Calculator = require('./calculator');

const calculator = new Calculator();

console.log("Addition: 5 + 3 =", calculator.add(5, 3)); // 8
console.log("Subtraction: 5 - 3 =", calculator.subtract(5, 3)); // 2
console.log("Multiplication: 5 * 3 =", calculator.multiply(5, 3)); // 15
console.log("Division: 6 / 3 =", calculator.divide(6, 3)); // 2
