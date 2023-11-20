const middle = function(arr) {
  let arrLength = arr.length;
  if (arrLength <= 2) {
    return [];
  }

  if (arrLength % 2 === 0) {
    return arr.slice(arrLength / 2 - 1, arrLength / 2 + 1);
  }

  if (arrLength % 2 !== 0) {
    return arr.slice(Math.round(arrLength / 2 - 1), Math.round(arrLength / 2));
  }
};

module.exports = middle;