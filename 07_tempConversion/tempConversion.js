const convertToCelsius = function(temp) {
let result = (temp - 32) * 5 / 9
return Math.round(result * 10) / 10;
};

// Number(result).toFixed(1)

const convertToFahrenheit = function(temp) {
let result = temp * 9 / 5 + 32
return Math.round(result * 10) / 10;
};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
