module.exports = function repeater(str, options) {
  if(str === undefined) throw new Error;
  let ConvertStr =[];
  if(str !== null) {
    ConvertStr.push(str);
    str = ConvertStr.join('');
  }
  let {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options;
  let additionFull = [];

  if(addition !== undefined) {
    if(addition === null) addition = 'null';
    if(additionRepeatTimes % 1 === 0) {
      for (let index = 0; index < additionRepeatTimes; index++) {
        additionFull.push(addition);
      }
    } else additionFull.push(addition);
  }

  additionFull = additionFull.join(additionSeparator);
  let strFull = str + additionFull;
  let result = [];
  if(repeatTimes % 1 === 0) {
    for (let index = 0; index < repeatTimes; index++) {
      result.push(strFull);
    }
  } else result.push(strFull);

  return result.join(separator);
};
  