function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};
const calculator = require("./index");

// console.log("Addition:", calculator.add(10, 5));
// console.log("Subtraction:", calculator.subtract(10, 5));
// console.log("Multiplication:", calculator.multiply(10, 5));
// console.log("Division:", calculator.divide(10, 5));