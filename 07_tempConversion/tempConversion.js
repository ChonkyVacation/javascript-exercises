const ftoc = (x1) => {
  let x2 = ((x1 - 32) * 5/9 )
  return (Math.round(x2 * 10) / 10);

};

const ctof = function(y1) {
  let y2 = (y1 * 9/5 + 32);
  return (Math.round(y2 * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
