const caesar = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar", () => {
    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
      const actual = caesar("abc", 0);
      const expected = false;
      expect(actual).to.eql(expected);
    })
  
    it("should ignore capital letters", () => {
        const actual = caesar("ABcD", 3);
        const expected = "defg";
        expect(actual).to.eql(expected)
    })
   it("if necessary, output should wrap around ends of alphabet", () => {
     const actual = caesar("xyz", 3);
     const expected = "abc";
     expect(actual).to.eql(expected);
   })
  it("should maintain spaces", () => {
    const actual = caesar("hi to you", 3);
    const expected = "kl wl brx";
    expect(actual).to.equal(expected)
  })
})
