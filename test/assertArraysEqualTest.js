const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
// assertArraysEqual([1, 2], [1, 2, 3]);
// assertArraysEqual([], []);

const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.equal(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns 'false' for [1, 2, 3], [1, 2, 4]", () => {
    assert.equal(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
  });

  it("returns 'false' for [1, 2], [1, 2, 3]", () => {
    assert.equal(assertArraysEqual([1, 2], [1, 2, 3]), false);
  });

  it("returns 'true' for [1, 2, 3], [1, 2, 4]", () => {
    assert.equal(assertArraysEqual([], []), true);
  });
});