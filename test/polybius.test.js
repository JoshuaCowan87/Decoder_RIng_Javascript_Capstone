const polybius = require("../src/polybius");
const expect = require("chai").expect

describe("polybius", () => {
  it("when encoding translates i and j to 42", () => {
    const actual = "424222";
    const expected = polybius(jig);
    expect(actual).to.eql(expected);
    
  it("when decoding translates 42 to (i/j)", () => {
    const actual = "(i/j)ump";
    const expected = polybius("42542353");
    expect(actual).to.eql(expected);
  })
  })
})


