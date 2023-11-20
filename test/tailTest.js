const tail = require('../tail');
const assert = require('chai').assert;
// const assertEqual = require('../assertEqual4Tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
// assertEqual(tail(words).length, 3);

// // Test cases
// assertEqual(tail([5, 6, 7]), [6, 7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertEqual(tail([42]), []); // An array with only one element should yield an empty array as its tail
// assertEqual(tail([]), []); // An empty array should yield an empty array as its tail

describe("#tail", () => {
  it("returns 3 for length", () => {
    assert.strictEqual(tail(words).length, 2);
  });

  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail([42]), []);
  });
  
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail([]), []);
  });
});