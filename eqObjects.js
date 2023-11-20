const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i++) {
    if (typeof obj1[keys1[i]] === "object" && !Array.isArray(obj1[keys1[i]])) {
      if (!eqObjects(obj1[keys1[i]], obj2[keys1[i]])) return false;
    } else {
      if (obj1[keys1[i]] !== obj2[keys1[i]]) return false;
    }
  }
  
  return true;
};

module.exports = eqObjects;