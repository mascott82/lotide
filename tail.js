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

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test cases
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([42]), []); // An array with only one element should yield an empty array as its tail
assertEqual(tail([]), []); // An empty array should yield an empty array as its tail