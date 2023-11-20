const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("Returns [0] for h", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });

  it("Returns [0] for h", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("Returns [0] for h", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it("Returns [0] for h", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});