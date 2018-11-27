const _ = {
  clamp: (num, min, max) => {
    return Math.min(Math.max(num, min), max);
  },
  inRange: (num, start, end) => {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let newEnd = start;
      start = end;
      end = newEnd;
    }
    return num >= start && num < end;
  },
  words: (str) => {
    return str.split(' ');
  },
  pad: (str, len) => {
    if (str.length < len) {
      let padFrontLength = Math.floor((len - str.length) / 2);
      let padEndLength = len - str.length - padFrontLength;
      str = ' '.repeat(padFrontLength) + str + ' '.repeat(padEndLength);
    }
    return str;
  },
  has: (obj, key) => {
    let hasValue = obj[key];
    return hasValue !== undefined;
  },
  invert: (obj) => {
    invertedObj = {};
    for (const key in obj) {
      let origValue = obj[key];
      invertedObj[origValue] = key;
    }
    return invertedObj;
  },
  findKey: (obj, f) => {
    for (const key in obj) {
      let val = obj[key];
      let fRetVal = f(val);
      if (fRetVal) {
        return key;
      }
    }
    return undefined;
  },
  drop: (array, n) => {
    if (isNaN(n)) { n = 1; }
    return array.slice(n);
  },
  dropWhile: (array, f) => {
    let dropCount = array.findIndex((e, i) => {
      return !f(e, i, array);
    });
    return _.drop(array, dropCount);
  },
  chunk: (array, size) => {
    if (size === undefined) { size = 1; }
    const retChunks = [];
    for (let ii = 0; ii < array.length; ii += size) {
      retChunks.push(array.slice(ii, ii+size));
    }
    return retChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
