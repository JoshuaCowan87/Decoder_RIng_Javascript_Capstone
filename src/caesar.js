// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
// assign variables
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    function caesar(input, shift, encode = true) {
        if (shift === 0 || shift > 25 || shift < -25) 
        return false
      input = input.toLowerCase();
// split input to isolate each character
      let letters = input.split("");
      console.log(letters)      
// convert each character into a number
  // need to adjust for 25 = z, 26 = a
     let numberOfLetter = [];
     letters.map(letter =>{
       return numberOfLetter.push(alphabet.indexOf(letter))
           })
      console.log(numberOfLetter)
      
    
  // shift each number according to shift number
    
    let shifted = numberOfLetter.map(index => {
      if (index < 0) index = //blank space; 
       return (index = index + shift);
    })
    console.log(shifted)
    
  // convert number back into character
  let encodedLetters = []
      shifted.map(index => {
       if (index === /*blank space*/) {encodedLetters.push(" ")};
      
      return (encodedLetters.push(alphabet[index]))
            
          })
      console.log(encodedLetters)
     
  // join back to string    
      let final = encodedLetters.join("")
      
   console.log(final)
     return final
    
    }
  
    return {
      caesar,
    };
  })();
  
  module.exports = caesarModule.caesar;
  


