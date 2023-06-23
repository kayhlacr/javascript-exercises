const repeatString = function (str, times) {
  if (times < 0) {
    return "ERROR";
  }
  let resultsStr = "";
  for (i = 0; i < times; i++) {
    resultsStr += str;
  }

  return resultsStr;
};

// Do not edit below this line
module.exports = repeatString;
