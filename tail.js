// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`Assertion Failed: Arrays have different lengths`);
    return;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: Element at index ${i} does not match`);
      return;
    }
  }

  console.log(`✅✅✅ Assertion Passed: Arrays are equal`);
};

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
module.exports.assertEqual = assertEqual;