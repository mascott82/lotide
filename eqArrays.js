const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      //return eqArrays(arr1[i], arr2[i]);
    } else {
      return arr1[i] === arr2[i];
    }
  }
  return true;
};

module.exports = eqArrays;