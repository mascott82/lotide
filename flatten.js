const flatten = function(srcArr) {
  let result = [];
  for (let i = 0; i < srcArr.length; i++) {
    if (Array.isArray(srcArr[i])) {
      result = result.concat(srcArr[i]);
    } else {
      result.push(srcArr[i]);
    }
  }

  return result;
};

module.exports = flatten;