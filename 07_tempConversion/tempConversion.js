const ftoc = function(num) {
  let temp = (num - 32) * (5/9);
  let roundTemp = Math.round(temp * 10) / 10;
  return roundTemp;
};

const ctof = function(num) {
  let cTemp = num * (9/5) + 32;
  let cRoundTemp = Math.round(cTemp * 10) / 10;
  return cRoundTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
