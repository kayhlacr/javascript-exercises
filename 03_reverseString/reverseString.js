const reverseString = function (str) {
  let resultsStr = "";
  for (let i = 0; i < str.length; i++) {
    resultsStr += str[str.length - i - 1];
  }
  return resultsStr;
};

// Do not edit below this line
module.exports = reverseString;
