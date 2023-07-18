const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function (...nums) {
  let sum = 1;
  for (let i = 0; i < nums.length; i++) {
    sum *= nums[i];
  }
  return sum;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i > +1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
