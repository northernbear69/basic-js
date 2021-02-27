module.exports = function transform(arr) {
  let tranformArr = [];
  let set = new Array('--double-prev', '--double-next', '--discard-next', '--discard-prev');

  arr.forEach((element, index, array) => {
    if(set.includes(element)) return;
    else if(array[index - 1] === '--double-next' && array[index + 1] === '--double-prev') tranformArr.push(element, element, element);
    else if(array[index - 1] === '--double-next' && array[index + 1] !== '--discard-prev') tranformArr.push(element, element);
    else if(array[index + 1] === '--double-prev' && array[index - 1] !== '--discard-next') tranformArr.push(element, element);
    else if(array[index - 1] === '--double-next' && array[index + 1] === '--discard-prev') tranformArr.push(element);
    else if(array[index - 1] === '--discard-next' || array[index + 1] === '--discard-prev') return;
    else tranformArr.push(element);
  });

  return tranformArr;
};
