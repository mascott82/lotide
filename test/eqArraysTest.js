//const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
// assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
// assertEqual(eqArrays([], []), true);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3], [1, 2, 4]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });

  it("returns false for [1, 2], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });

  it("returns true for [1, 2, 3], [1, 2, 4]", () => {
    assert.deepEqual(eqArrays([], []), true);
  });

  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false for [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns true for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});