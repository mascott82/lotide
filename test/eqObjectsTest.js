const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};
eqObjects(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long"};
eqObjects(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"]};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);

describe("eqObjects()", () => {
  it("Return true for shirtObject, anotherShirtObject", () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });

  it("Return true for shirtObject, longSleeveShirtObject", () => {
    assert.isTrue(eqObjects(shirtObject, longSleeveShirtObject));
  });

  it("Return true for multiColorShirtObject, anotherMultiColorShirtObject", () => {
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it("Return true for multiColorShirtObject, longSleeveMultiColorShirtObject", () => {
    assert.isTrue(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });

  it("Return true for { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("Return true for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("Return true for { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});
