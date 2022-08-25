const ftoc = function(num) {
  let temp = (num - 32) * (5/9);
  let roundTemp = Math.round(temp * 10) / 10;
  return roundTemp;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
