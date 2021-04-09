// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const realAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  
    function subEncode (input, alphabet) {
      let codeMessage = [];
      input = input.toLowerCase();
      for (let i = 0; i < input.length; i++){
       let codeIndex = realAlphabet.indexOf(input[i]);
       let codeLetter = alphabet[codeIndex];
         if (codeIndex < 0) {codeMessage.push(input[i])};
            codeMessage.push(codeLetter)
            console.log(codeLetter)
      }
       return codeMessage.join("")
    }

    function subDecode (input, alphabet) {
      let decodeMessage = [];
      for (let i =0; i < input.length; i++){
        let decodeIndex = alphabet.indexOf(input[i]);
        let decodeLetter = realAlphabet[decodeIndex];
        if (decodeIndex < 0){decodeMessage.push(input[i])};
        decodeMessage.push(decodeLetter)
      }
        return decodeMessage.join("")
    };

    function substitution(input, alphabet, encode = true) {
      if (!alphabet) return false;
     if (alphabet.length != 26) return false;
    for (let i = 0; i<input.length; i++){
      if (alphabet.indexOf(input[i]) != alphabet.lastIndexOf(input[i])) return false
    }
      if (encode) return subEncode(input, alphabet);
      return subDecode(input, alphabet);
      }
  
  return {
    substitution,
  };
})();
//substitutionModule.substitution("abc", "qwertyuiopasdfghjklzxcvbnm")

module.exports = substitutionModule.substitution;
