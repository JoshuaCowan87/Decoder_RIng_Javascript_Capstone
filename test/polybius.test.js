const polybius = require("../src/polybius");
const expect = require("chai").expect

describe("polybius", () => {
  it("when encoding translates i and j to 42", () => {
    const actual = polybius("jig"); 
    const expected = "424222";
    expect(actual).to.eql(expected);
    
  it("when decoding translates 42 to (i/j)", () => {
    const actual = polybius("42542353");
    const expected = "(i/j)ump";
    expect(actual).to.eql(expected);
  })
  })
  it("should ignore capital letters", () => {
    const actual = polybius("jIg")
    const expected = polybius("JiG")
    expect(actual).to.eql(expected);
  })
  
})


