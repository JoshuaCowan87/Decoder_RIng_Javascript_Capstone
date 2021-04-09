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
   it("if necessary, output should wrap around beginning of alphabet", () => {
    const actual = caesar("abc", -3);
    const expected = "xyz";
    expect(actual).to.eql(expected);
  })
  it("should maintain spaces", () => {
    const actual = caesar("hi to you", 3);
    const expected = "kl wr brx";
    expect(actual).to.equal(expected)
  })

  it("test 1", () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.eql(expected)
})
it("test 2", () => {
    const actual = caesar("thinkful", -3);
    const expected = "qefkhcri";
    expect(actual).to.eql(expected)
})
it("test 3", () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.eql(expected)
})
it("test 4", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(expected)
})
it("test 5", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.eql(expected)
})
it("test 6", () => {
    const actual = caesar("thinkful");
    expect(actual).to.eql(false)
})
it("test 7", () => {
    const actual = caesar("thinkful", 99);
    expect(actual).to.eql(false)
})
it("test 8", () => {
    const actual = caesar("thinkful", -26);
    expect(actual).to.eql(false)
})
})
