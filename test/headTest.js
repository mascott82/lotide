// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// // Additional test cases
// assertEqual(head([42]), 42); // An array with only one element should yield that one element as its head
// assertEqual(head([]), undefined); // An empty array should yield undefined as its head

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});