// calculator.js

class Calculator {
  // Add two numbers
  add(a, b) {
    return a + b;
  }

  // Subtract second number from first
  subtract(a, b) {
    return a - b;
  }

  // Multiply two numbers
  multiply(a, b) {
    return a * b;
  }

  // Divide first number by second
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is undefined.");
    }
    return a / b;
  }
}

// Export the Calculator class for use in other files
module.exports = Calculator;
