const leapYears = function (yearInput) {
  let leapChecked;
  if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || yearInput % 400 === 0) {
    return (leapChecked = true);
  } else {
    return (leapChecked = false);
  }
  return leapChecked;
};

// Do not edit below this line
module.exports = leapYears;
