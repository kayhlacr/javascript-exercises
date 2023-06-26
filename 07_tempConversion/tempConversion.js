const convertToCelsius = function (fTemp) {
  const cConversion = (fTemp - 32) * (5 / 9);
  let cRounded = Math.round(cConversion * 10) / 10; //to round to one decimal place
  {
    return cRounded;
  }
};

const convertToFahrenheit = function (cTemp) {
  const fConversion = cTemp * (9 / 5) + 32;
  let fRounded = Math.round(fConversion * 10) / 10; //to round to one decimal place
  {
    return fRounded;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
