const fibonacci = function (total) {
  if (total < 0) return "OOPS";
  const fibPart = [0, 1];
  for (let i = 1; i < total; i++) {
    fibPart.push(fibPart[i] + fibPart[i - 1]);
  }
  return fibPart[total];
};

// Do not edit below this line
module.exports = fibonacci;
