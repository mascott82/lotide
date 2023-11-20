const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


describe("#assertEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it("returns 'false' for [1, 2, 3], [1, 2, 4]", () => {
    assert.equal(assertEqual(1, 1), true);
  });
});