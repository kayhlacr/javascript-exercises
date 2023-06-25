const sumAll = function (num1, num2) {
  let sum = 0;
  let error = "ERROR";

  let bigValue = Math.max(num1, num2);
  let smallValue = Math.min(num1, num2);

  if (typeof num1 === "string" && typeof num2 === "string") {
    return error;
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else if (bigValue >= 0 && smallValue >= 0) {
    for (let i = smallValue; i <= bigValue; i++) {
      sum = sum + i;
    }
  } else {
    return error;
  }

  return sum;
};
// Do not edit below this line
module.exports = sumAll;
