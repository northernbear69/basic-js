const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    if(value == null) {
      value = '( null )';
    } else {
      value = `( ${value.toString()} )`;
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position % 1 === 0) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain.splice(0);
      throw new Error("Error");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain.splice(0);
    return result;
  },

};

module.exports = chainMaker;
