const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(typeof date === 'string' || !date.getTime()) throw new Error;

  let month = date.getMonth() + 1;
  
  if(3 <= month && month <= 5) return 'spring';
  else if (6 <= month && month <= 8) return 'summer';
  else if (9 <= month && month <= 11) return 'autumn';
  else return 'winter'
};
