const CustomError = require("../extensions/custom-error");
let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class VigenereCipheringMachine {

  constructor(machineType = true) {
    this.machine = machineType
  }


  encrypt(str, key) {
    if(!str || !key) throw new Error;
    let result = [];
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
    key = this.getFullKey(str, key);
    let indexKeyLetter = 0;
    str.forEach((el, index) => {
      if(!abc.includes(el)) result.push(el);
      else {
        let letterPos = abc.indexOf(el);
        let keyLetter = key[indexKeyLetter];
        let strWithShift = this.shiftLine(keyLetter);
        result.push(strWithShift[letterPos]);
        indexKeyLetter += 1;
      }
    });

    if(!this.machine) result = result.reverse();
    return result.join('');
  }

  decrypt(str, key) {
    if(!str || !key) throw new Error;
    let result = [];
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
    key = this.getFullKey(str, key);
    let indexKeyLetter = 0;
    str.forEach((el, index) => {
      if(!abc.includes(el)) result.push(el);
      else {
        let keyLetter = key[indexKeyLetter];
        let strWithShift = this.shiftLine(keyLetter);
        let letterPos = strWithShift.indexOf(el);

        result.push(abc[letterPos]);
        indexKeyLetter += 1;
      }
    });

    if(!this.machine) result = result.reverse();
    return result.join('');
  }

  getFullKey(str, key) {
    let strLength = str.length;

    while(key.length < strLength) {
      key = key.concat(key);
    }

    key = key.slice(0, strLength);
    return key;
  }

  shiftLine(keyLetter) {
    let keyLetterPos = abc.indexOf(keyLetter);
    let result = abc.slice(keyLetterPos);
    result = result.concat(abc);
    result = result.slice(0, abc.length);
    return result;
  }
}

module.exports = VigenereCipheringMachine;
