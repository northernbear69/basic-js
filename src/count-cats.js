module.exports = function countCats(backyard) {
  result = 0;
  backyard.forEach(element => {
    element.forEach(el => {if(el === '^^') result++})
  });
  return result;
};
