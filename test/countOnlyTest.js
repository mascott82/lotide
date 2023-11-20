const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

describe("#countOnly", () => {
  it("Returns 1 for ['Jason']", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("Returns undefined for ['Karima']", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("Returns 2 for ['Fang']", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("Returns undefined for ['Agouhanna']", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});